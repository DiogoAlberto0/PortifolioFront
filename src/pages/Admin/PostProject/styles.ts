import { styled } from "styled-components";

export const UnauthorizedContainer = styled.main`
    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    > h1 {
        background-color: red;
        color: white;

        border-radius: 20px;
        padding: 2rem;
    }
`

export const PostProjectContainer = styled.main`
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100vh;
        width: 100%;


    > form {
        background-color: ${props => props.theme["yellow-500"]};
        color: white;
        
        width: 60%;
        min-height: 50%;
        max-height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
        padding: 1rem;

        overflow: auto;

        > span {
            background-color: red;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 0.5rem;
        }
        
        > div {
            display: flex;
            /* gap: 1rem; */
            margin: 0.5rem 0;
            > input, textarea {
                background-color: ${props => props.theme["yellow-700"]};
                
                width: 100%;
                height: 2rem;
                padding: 0.5rem;

                border: 1px solid #000;
                border-radius: 1rem;

                &:hover {
                    background-color: ${props => props.theme["yellow-900"]};
                }
            }

            > textarea {
                height: 10rem;
                resize: none; 
                
                @media (max-height: 500px) {
                    height: 1rem;
                }
            }

            > select {
                background-color: ${props => props.theme["yellow-700"]};
                color: white;

                width: 100%;
                height: 2rem;
                padding: 0.5rem;

                border: none;
                border-radius: 1rem;

                &:hover {
                    background-color: ${props => props.theme["yellow-900"]};
                }
            }
        }

        > button {
            background-color: ${props => props.theme["yellow-700"]};
            color: white;


            height: 2rem;
            padding: 0.5rem;
            
            border: none;
            border-radius: 1rem;

            &:hover {
                background-color: ${props => props.theme["yellow-900"]};
            }
        }
    }
`