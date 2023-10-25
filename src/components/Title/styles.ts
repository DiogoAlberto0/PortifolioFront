import { styled } from "styled-components";

export const TitleContent = styled.h1`
    background-color: ${props => props.theme["gray-500"]};

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    font-size: 3rem;
    font-weight: 800;

    border: dashed;

    @media(max-width: 768px) {
        font-size: 2rem;
    }
`
