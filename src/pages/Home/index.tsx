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

                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.</p>

                <NavLink to="/aboutme"><button>Mais sobre mim</button></NavLink>
            </div>
            <img src={avatar} alt="" />
        </HomeContainer>
    )
}