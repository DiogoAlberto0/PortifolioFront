import { PortifolioCardStyle } from "./styles"

import { useNavigate } from "react-router-dom"

interface PortifolioCardProps{
    id: number;
    name: string;
    imageUrl: string;
}
export const PortifolioCard = ({ id, name, imageUrl }:PortifolioCardProps) => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/project/${id}`)
    }

    return (
        <PortifolioCardStyle onClick={handleClick}>
            <img src={imageUrl} alt="" />
            <footer>{name}</footer>
        </PortifolioCardStyle>
    )
}