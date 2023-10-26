import { StyledProject } from "./styles"

import { useParams } from "react-router-dom"

import { Title } from "../../components/Title"

import { GithubLogo, Link as LinkIcon} from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { api } from "../../api/axios"

type Project = {
    id: number;
    name: string;
    imageUrl: string;
    description?: string;
    githubUrl?: string;
    projectUrl?: string;
}

export const Project = () => {

    const { id } = useParams()

    const [ project, setProject ] = useState<Project>({} as Project)

    // const baseURL = import.meta.env.VITE_BASE_API_URL

    useEffect(( ) => {
        const getProject = async() => {
            await api.get(`/project/${id}`)
                .then(resp => setProject(resp.data.projects))
                .catch(erro => console.warn(erro.response.data))
        }
        getProject()
    }, [id])

    if (!id) {
        return <h1>Página Não Encontrada</h1>
    } else {
        return (
            <StyledProject>
                <Title title={project.name}/>
                <img
                    src={`${project.imageUrl}`}
                    alt=""
                />

                <p>
                    {project.description}
                </p>

                <div>
                    <a 
                        href={project.projectUrl}
                        target="_blank"
                    >
                        <LinkIcon
                            // size={32}
                            weight="bold"
                            href={project.projectUrl}
                        />
                        Link
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                    >
                        <GithubLogo
                            // size={32}
                            weight="bold"
                        />
                        Código
                    </a>
                </div>
            </StyledProject>
        )
    }
}