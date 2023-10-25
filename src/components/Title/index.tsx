import { TitleContent } from "./styles"


interface propsTitle {
    title: string
}
export const Title = ({title}:propsTitle) => {
    return <TitleContent>{title}</TitleContent>
} 