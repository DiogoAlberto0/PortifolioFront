import styled from "styled-components";


export const DefaultLayoutStyle = styled.main`
    display: flex;

    > div {
        display: flex;
        flex-direction: column;


        width: 100%;
        height: 100vh;

        padding: 2rem;

        overflow: auto;

        /* position: relative; */

    }




    > nav {
        display: none;
    }



    @media(max-width: 768px){
        > header {
            display: none;
        }

        > nav {
            display: flex ;
            /* position: absolute; */
        }
    }
`