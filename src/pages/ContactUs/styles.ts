import { styled } from "styled-components";

export const ContactUsContainer = styled.div`
    /* background-color: blue; */
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 2rem;
    /* align-items: center; */

    h2 {
        padding: 1.5rem 0;
    }
`

export const ContactUsContent = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    a {
        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        font-weight: 900;
        color: ${props => props.theme.black};

        &:hover {
            color: ${props => props.theme["yellow-500"]};
        }
    }
`