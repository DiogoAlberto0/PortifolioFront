import { DefaultLayoutStyle } from "./styles"

import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { IconsMenu } from "../../components/IconsMenu"


export const DefaultLayout = () => {
    return(
        <DefaultLayoutStyle>
            <Header />
            <IconsMenu />
            <Outlet />
        </DefaultLayoutStyle>
    )
}