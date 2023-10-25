import { AboutMeContainer, HabilityContainer, HabilityContent } from "./styles"


import { Atom, FileTs, GithubLogo } from "@phosphor-icons/react"
import { Title } from "../../components/Title"


export const AboutMe = () => {
    return(
        <AboutMeContainer>
            <Title title="Sobre mim"></Title>

            <h2>Eu sou o Diogo, Desenvolvedor React JR</h2>

            <p>Sou um jovem desenvolvedor React altamente motivado, com experiência em construir interfaces interativas e responsivas usando React. Tenho proficiência em JavaScript, HTML e CSS, e estou sempre atualizado com as melhores práticas e tendências do React. Sou colaborativo, adaptável e apaixonado por codificação. Estou pronto para contribuir para o sucesso da sua empresa e criar produtos incríveis juntos.</p>
       

            <HabilityContainer>
                <h3>Habilidades</h3>

                <HabilityContent>
                    <Atom size={64}/>
                    <div>
                        <h4> React</h4>
                        <p>
                        Habilidade com React envolve a criação de interfaces dinâmicas usando a biblioteca JavaScript. Isso inclui componentes, estado e props para construir aplicações web eficientes. É uma habilidade valorizada devido à sua popularidade e uso generalizado no desenvolvimento de aplicações modernas.
                        </p>
                    </div>
                </HabilityContent>
                <HabilityContent>
                    <GithubLogo  size={64} />
                    <div>
                        <h4> Git</h4>
                        <p>
                        Habilidade com React envolve a criação de interfaces dinâmicas usando a biblioteca JavaScript. Isso inclui componentes, estado e props para construir aplicações web eficientes. É uma habilidade valorizada devido à sua popularidade e uso generalizado no desenvolvimento de aplicações modernas.
                        </p>
                    </div>
                </HabilityContent>
                <HabilityContent>
                    <FileTs size={64} />
                    <div>
                        <h4> Typescript</h4>
                        <p>
                        Habilidade com React envolve a criação de interfaces dinâmicas usando a biblioteca JavaScript. Isso inclui componentes, estado e props para construir aplicações web eficientes. É uma habilidade valorizada devido à sua popularidade e uso generalizado no desenvolvimento de aplicações modernas. 
                        </p>
                    </div>
                </HabilityContent>
                
            </HabilityContainer>


        </AboutMeContainer>
    )
}