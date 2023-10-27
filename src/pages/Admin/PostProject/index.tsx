//formulários
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

//acesso a api
import { api } from "../../../api/axios"

//hooks react
import { useCookies } from "react-cookie"
import { useContext, useEffect } from "react"
import { ProjectContext } from "../../../Contexts/ProjectContext"

//estilização
import { PostProjectContainer, UnauthorizedContainer } from "./styles"



const ProjectFormSchema = z.object({
    id: z.string().optional(),
    image: z.instanceof(FileList)
        .refine(file => file.length > 0, "File is ")
        .transform(file => file[0]!)
        .refine(file => file.size < 1024 * 1024 * 5, 'O arquivo deve ser menor que 5MB'),

    name: z.string()
        .min(1, 'Informe o nome do projeto')
        .max(100, 'O nome deve ter no máximo 100 caracteres'),

    description: z.string()
        .min(1, 'Informe a descrição do projeto'),

    githubUrl: z.string()
        .min(1, 'Informe o link do projeto no github'),

    projectUrl: z.string()

})

type ProjectFormData = z.infer<typeof ProjectFormSchema>



export const PostProject = () => {

    const [cookies] = useCookies(['token', 'authenticated']);

    const { authenticated } = cookies

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors }
    } = useForm<ProjectFormData>({
        resolver: zodResolver(ProjectFormSchema)
    })

    const { projects } = useContext(ProjectContext)

    const projectSelectedId = watch('id')

    //carregando projeto selecionado para fazer alterações
    useEffect(() => {
        const getProjectId = async (id: number) => {
            await api.get(`/project/${id}`)
                .then(response => {
                    setValue('name', response.data.projects.name)
                    setValue('description', response.data.projects.description)
                    setValue('githubUrl', response.data.projects.githubUrl)
                    setValue('projectUrl', response.data.projects.projectUrl)
                })
                .catch(erro => console.warn(erro.response.data))
        }
        if (projectSelectedId) {
            getProjectId(Number(projectSelectedId))
        } else {
            setValue('name', '')
            setValue('description', '')
            setValue('githubUrl', '')
            setValue('projectUrl', '')
        }
    }, [projectSelectedId])


    const onSubmit = async (data: ProjectFormData) => {
        const { name, description, githubUrl, projectUrl, image } = data

        const config = {
            headers: {
                authentication: cookies.token,
                "Content-Type": 'multipart/form-data'
            }
        }
        if (!projectSelectedId) {
            await api.post('/image', { image }, config)
                .then(async response => {
                    await api.post('/project', {
                        name,
                        description,
                        githubUrl,
                        projectUrl,
                        imageUrl: response.data.path
                    }, { headers: { authentication: cookies.token } })
                        .then(response => {
                            alert(`Projeto cadastrado com sucesso: ${response.data}`)
                            reset()
                        })
                        .catch(erro => alert(erro.response.data))

                })
                .catch(erro => console.warn(erro.response.data))
        } else {

            const resp = confirm("tem certeza que deseja alterar esse projeto?")

            if (!resp) {
                return
            }
            await api.post('/image', { image }, config)
                .then(async response => {
                    await api.put(`/project/${projectSelectedId}`, {
                        name,
                        description,
                        githubUrl,
                        projectUrl,
                        imageUrl: response.data.path
                    }, { headers: { authentication: cookies.token } })
                        .then(response => console.log(response.data))
                        .catch(erro => console.warn(erro.response.data))

                })
                .catch(erro => console.warn(erro.response.data))

                reset()
        }
    }

    if (!authenticated) {
        return(
            <UnauthorizedContainer>
                <h1>Usuário não autenticado</h1>
            </UnauthorizedContainer>
        )
    }
    return (
        <PostProjectContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        id="name"
                        type="text"
                        {...register('name')}
                        
                    />
                </div>
                {errors.name && <span>{errors.name.message}</span>} 

                <div>
                    <label htmlFor="description">Descrição:</label>
                    <textarea
                        id="description"
                        
                        {...register('description')}
                        
                    />
                </div>
                {errors.description && <span>{errors.description.message}</span>}

                <div>
                    <label htmlFor="githubUrl">Link do código no github:</label>
                    <input
                        id="githubUrl"
                        type="text"
                        {...register('githubUrl')}
                        

                    />
                </div>
                {errors.githubUrl && <span>{errors.githubUrl.message}</span>}

                <div>
                    <label htmlFor="projectUrl">Link do projeto:</label>
                    <input
                        id="projectUrl"
                        type="text"
                        {...register('projectUrl')}
                    />    
                </div>
                {errors.projectUrl && <span>{errors.projectUrl.message}</span>}

                <div>
                    <label htmlFor="image">imagem:</label>
                    <input
                        id="image"
                        type="file"
                        accept="image/*"
                        {...register('image')}
                        
                    />
                </div>
                {errors.image && <span>{errors.image.message}</span>}

                <div>
                    <select id="projects" {...register("id")}>
                        <option value="">Novo projeto...</option>
                        {
                            projects.map(project => <option key={project.id} value={project.id}>{project.name}</option>)
                        }
                    </select>

                </div>

                <button type="submit" >Enviar</button>
            </form>
        </PostProjectContainer>
    )
}