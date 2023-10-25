import { styled } from "styled-components";


export const SinginContainer = styled.main`
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100vh;
        width: 100%;


    > form {
        background-color: ${props => props.theme["yellow-500"]};
        color: white;
        
        width: 50%;
        height: 50%;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
        padding: 1rem;

        > span {
            background-color: red;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 0.5rem;
        }
        
        > div {
            display: flex;
            gap: 1rem;
            > input {
                background-color: ${props => props.theme["yellow-700"]};

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