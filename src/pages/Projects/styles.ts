import styled from "styled-components";


export const StyledProject = styled.main`
    display: flex;
    flex-direction: column;

    gap: 2rem;
    padding: 2rem;

    max-height: 100vh;

    overflow-y: auto;

    > img {
        width: 100%;
        height: auto;

        border-radius: 25px;
    }

    > p {
        line-height: 1.3;
    }

    > div {

        display: flex;

        justify-content: space-evenly;

        > a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            padding: 0.5rem 2rem;

            text-decoration: none;
            color: ${props => props.theme.black};

            width: 200px;
            /* height: 100px; */

            border: 0;
            border-radius: 50px;

            font-size: 1rem;

            > svg {
                height: 32px;
                width: 32px;
            }

            &:first-child {
                background-color: ${props => props.theme["yellow-500"]};

                &:hover {
                    background-color: ${props => props.theme["yellow-900"]};
                }
            }
            &:last-child {
                background-color: transparent;

                border: 5px solid ${props => props.theme["yellow-500"]};
                color: ${props => props.theme["yellow-500"]};

                &:hover {
                    border: 5px solid ${props => props.theme["yellow-900"]};
                    color: ${props => props.theme["yellow-900"]};
                }
            }
        }

        @media(max-width: 768px) {
            flex-direction: column;
            > a {
                width: 100%;
                &:first-child {
                    margin-bottom: 1rem;
                }
            }
        }
    }
`