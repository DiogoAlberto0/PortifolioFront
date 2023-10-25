import { styled } from "styled-components";

export const PortifolioCardStyle = styled.div`
    width: 50%;
    position: relative;

    border: 1px solid transparent;

    overflow: hidden;

    transition: ease-in-out 0.5s;

    &:hover{
        border: 1px dashed black;
        
        footer {
            transform: translateY(0);
        }
    } 
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;
        
        background-image: linear-gradient(#00000074, #000);
        color: white;
        font-weight: 200;

        transform: translateY(110%);
        transition: ease-in-out 0.5s;

    }
    img {
        width: 100%;
        height: 100%;


        object-fit: scale-down;
    }

    @media ( max-width: 600px ) {
        width: 100%;

        > footer {
            transform: translateY(0);
        }
    }
`