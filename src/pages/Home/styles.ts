import { styled } from "styled-components";


export const HomeContainer = styled.div`
    display: flex;

    height: 100vh;
    width: 100vw;

    overflow: hidden;
    position: relative;

    img{
        width: 40%;
        height: auto;

        object-fit: cover;
    }
   div {
    /* background-color: red; */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    padding: 5rem;

    a { 
        /* background-color: blue; */
        text-decoration: none;
        color: ${props => props.theme.black};
        font-weight: 700;
        font-size: 2rem;

        &:hover {
            cursor: auto;
        }
    }
    h2 {
        /* background-color: green; */
        font-weight: 900;
        font-size: 3rem;

        span {
            color: ${props => props.theme["yellow-500"]};
        }
    }
    h3 {
        background-color: ${props => props.theme["yellow-500"]};
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.5rem;

        font-weight: 500;
        font-size: 1rem;
    }

    p {
        /* background-color: violet; */
        font-weight: 400;
    }

    button{
        background-color: ${props => props.theme["yellow-500"]};
        padding: 1rem 2rem;
        
        border: none;
        border-radius: 32px;

        font-weight: 700;

        &:hover {
            color: ${props => props.theme.white};
        }
    }
   }

   @media (max-width: 768px) {

        img {
            height: 150px;
            width: auto;

            position: absolute;
            top: -25px;
            right: -25px;

            border-radius: 50%;
            border: 2px solid ${props => props.theme["yellow-500"]};
        }

        div {
            padding: 2rem;
            align-items: center;
            gap: 0.5rem;

            h2 {
                font-size: 2rem;
            }

            h3 {
                font-size: 0.8rem;
            }

            p {
                font-size: 0.8rem;
            }

            button {
                font-size: 0.8rem;
            }
        }
   }
`