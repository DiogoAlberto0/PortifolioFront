import { styled } from "styled-components";


export const AboutMeContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    padding: 2rem;

    height: 100vh;

    overflow-y: auto;
    h2 {
        font-size: 3rem;
        margin-top: 1rem;
    }

    @media(max-width: 768px) {
        h2 {
            font-size: 2rem;
        }
    }
`

export const HabilityContainer = styled.div`
    /* height: 50%; */

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin-top: 1rem;
    h3 {
        font-size: 2rem;
    }
    @media(max-width: 768px) {
        h3 {
            font-size: 1rem;
        }
    }
`

export const HabilityContent = styled.div`
    display: flex;
    align-items: center;

    gap: 2rem;

    margin-top: 1rem;
    div {
        display: flex;
        flex-direction: column;
        width: 100%;

        h4 {
            font-size: 1rem;
        }
    }
    @media(max-width: 768px) {
        flex-direction: column;
        > div {
            h4 {
                font-size: 0.8rem;
            }
            p {
                font-size: 0.8rem;
            }

        }
    }

`