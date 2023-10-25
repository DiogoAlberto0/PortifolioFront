
import { ReactNode, createContext, useEffect, useState } from "react"

import { api } from "../api/axios";

type Project = {
    id: number;
    name: string;
    imageUrl: string;
    description?: string;
    githubUrl?: string;
    projectUrl?: string;
}

interface ProjectsContextType {
    projects: Project[]
}

interface ProjectsProviderProps {
    children: ReactNode
}

export const ProjectContext = createContext({} as ProjectsContextType)

export const ProjectsProvider = ({children}:ProjectsProviderProps) => {

    const [ projects, setProjects ] = useState<Project[]>([])

    const getProjects = async() => {
        await api.get('/project')
            .then(resp => setProjects(resp.data.projects))
            .catch( erro => console.warn(erro.response.data))
        
    }

    useEffect(() => {
        getProjects()
    }, [])

    return(
        <ProjectContext.Provider value={ { projects }}>
            {children}
        </ProjectContext.Provider>
    )
}