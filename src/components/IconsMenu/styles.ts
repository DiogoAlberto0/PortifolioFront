import styled from "styled-components";

export const IconMenuContainer = styled.nav`
    position: absolute;
    z-index: 1;

    background-color: ${props => props.theme["yellow-500"]};
    right: 20px;
    top: 50vh;
    transform: translate(0, -50%);

    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 1rem;

    border-radius: 50px;



    a {
        color: ${props => props.theme.black};

        &:hover {
            svg {
                color: ${props => props.theme.white};
            }
        }
        &.active {
            color: ${props => props.theme.white};
        }
    }

    @media(max-width: 768px) {
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }
    }
`