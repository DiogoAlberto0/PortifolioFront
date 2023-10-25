import { useContext } from "react"
import { Title } from "../../components/Title"
import { PortifolioCard } from "./PortifolioCard"
import { PortifolioContent, PortifolioCotainer } from './styles'
import { ProjectContext } from "../../Contexts/ProjectContext"

export const Portifolio = () => {

    const { projects } = useContext(ProjectContext)

    const baseURL = import.meta.env.VITE_BASE_API_URL

    return(
        <PortifolioCotainer>
            <Title title="Portifolio"/>

            <PortifolioContent>
                {
                    projects.map(project => (
                        <PortifolioCard
                            key={project.id}
                            name={project.name}
                            imageUrl={`${baseURL}${project.imageUrl}`}
                            id={project.id}
                        />
                    ))
                }

            </PortifolioContent>
        </PortifolioCotainer>
    )
}