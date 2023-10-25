import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 100vh;
    width: 250px;

    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */

    background-color: ${props => props.theme["yellow-500"]};

    nav {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    
        a {
            height: 30px;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            text-decoration: none;
            color: ${props => props.theme.black};
            list-style: none;
            font-weight: 700;

            &:hover {
                color: ${props => props.theme.white};
                cursor: pointer;
            }
            &.active {
                color: ${props => props.theme.white};
            }
        }

        div {
            background-color: ${props => props.theme.black};
            height: 30px;
            width: 1px;

            position: relative;

            &:first-child::before{
                content: '';
                position: absolute;
                right: -4px;
                bottom: 30px;
                background-color: black;
                height: 8px;
                width: 8px;
                border-radius: 50%;
            }
            &:last-child::after{
                content: '';
                position: absolute;
                right: -4px;
                top: 30px;
                background-color: black;
                height: 8px;
                width: 8px;
                border-radius: 50%;
            }
        }
    }


`
