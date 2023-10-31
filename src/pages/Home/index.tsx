import { NavLink } from 'react-router-dom'

import avatar from '../../assets/avatar.svg'

import { HomeContainer } from './styles'

export const Home = () => {



    return(
        <HomeContainer>
            <div>
                <NavLink to="/singin" >Olá!</NavLink>
                <h2>Eu sou o <span>Diogo</span></h2>
                <h3>React developer</h3>

                <p>Olá! Sou Diogo Alberto, o criador por trás desses aplicativos web incríveis! Bem-vindo ao meu portfólio digital, onde a inovação encontra a funcionalidade. Explore e descubra as soluções que transformam ideias em experiências digitais extraordinárias. Sinta-se à vontade para explorar e entrar em contato para transformar sua visão em realidade. Boas-vindas ao futuro da tecnologia!</p>

                <NavLink to="/aboutme"><button>Mais sobre mim</button></NavLink>
            </div>
            <img src={avatar} alt="" />
        </HomeContainer>
    )
}