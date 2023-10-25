import { IconMenuContainer } from './styles'

import { House, User, Book, PaperPlaneTilt } from '@phosphor-icons/react'

import { NavLink } from 'react-router-dom'
export const IconsMenu = () => {

    return(
        <IconMenuContainer>
            <NavLink to="/"><House size={24} weight="fill"/></NavLink>
            <NavLink to="/aboutme"><User size={24} weight="fill"/></NavLink>
            <NavLink to="/portifolio"><Book size={24} weight="fill"/></NavLink>
            <NavLink to="/contactus"><PaperPlaneTilt size={24} weight="fill"/></NavLink>
        </IconMenuContainer>
    )
}