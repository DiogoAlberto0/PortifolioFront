import { NavLink } from 'react-router-dom'
import avatar from '../../assets/avatar.svg'


import { HeaderContainer } from './styles'

export const Header = () => {

    return(
        <HeaderContainer>
            <img src={avatar} alt="" />

            <nav>
                <div></div>
                <NavLink to="/">Home</NavLink >
                <div></div>
                <NavLink to="/aboutMe">Sobre mim</NavLink >
                <div></div>
                <NavLink to="portifolio">Portifólio</NavLink >
                <div></div>
                <NavLink to="contactus">Contatos</NavLink >
                <div></div>
            </nav>
        </HeaderContainer>
    )
}