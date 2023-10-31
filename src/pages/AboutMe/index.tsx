import { AboutMeContainer, HabilityContainer, HabilityContent } from "./styles"


import { Atom, FileTs, GithubLogo, FileJs } from "@phosphor-icons/react"
import { Title } from "../../components/Title"


export const AboutMe = () => {
    return(
        <AboutMeContainer>
            <Title title="Sobre mim"></Title>

            <h2>Um pouco mais sobre a minha trajetória</h2>

            <p>Olá, sou Diogo Alberto, um desenvolvedor web apaixonado com uma sólida experiência em tecnologias front-end e conhecimento básico em backend. Meu caminho profissional começou na faculdade, onde mergulhei fundo no universo do desenvolvimento web, especializando-me em JavaScript, HTML e CSS. Com habilidades sólidas nessas linguagens de programação fundamentais, desenvolvi projetos dinâmicos e responsivos que proporcionam experiências de usuário excepcionais em dispositivos móveis e desktops.</p>

            <p>
            Além do meu conhecimento técnico, sou um colaborador proativo e comprometido com o trabalho em equipe. Acredito na aprendizagem contínua e mantenho-me atualizado sobre as últimas tendências e melhores práticas em React, Node.js e outras tecnologias relacionadas. Estou animado para aplicar minhas habilidades e experiência em um ambiente profissional, contribuindo para projetos inovadores e desafiadores no mundo do desenvolvimento web.
            </p>
            <p>
            Estou à procura de oportunidades que me permitam expandir meu conhecimento, enfrentar novos desafios e trabalhar em projetos que impactem positivamente os usuários finais. Estou entusiasmado para fazer parte de uma equipe talentosa e colaborativa, onde posso aplicar minha paixão pelo desenvolvimento web e criar soluções que elevem as experiências online para o próximo nível.
            </p>
       

            <HabilityContainer>
                <h3>Habilidades</h3>

                <HabilityContent>
                    <Atom size={64}/>
                    <div>
                        <h4> React</h4>
                        <p>
                        Tenho uma profunda experiência em React, uma biblioteca JavaScript amplamente utilizada para criar interfaces de usuário interativas e dinâmicas. Minha familiaridade com React me permitiu desenvolver projetos complexos, utilizando estados, props e práticas recomendadas para criar componentes reutilizáveis e eficientes.
                        </p>
                    </div>
                </HabilityContent>
                <HabilityContent>
                    <GithubLogo  size={64} />
                    <div>
                        <h4> Git</h4>
                        <p>
                        Possuo habilidades avançadas em Git, utilizando-o para controlar versões, colaborar eficientemente em projetos de equipe e garantir a integridade do código. Minha experiência com ferramentas como GitHub reflete minha capacidade de contribuir de maneira organizada e colaborativa em qualquer projeto. Estou sempre em busca de aprimorar minhas habilidades em Git, garantindo uma gestão precisa e eficaz do código fonte.
                        </p>
                    </div>
                </HabilityContent>
                <HabilityContent>
                    <FileTs size={64} />
                    <div>
                        <h4> Typescript</h4>
                        <p>
                        Possuo habilidades avançadas em TypeScript, utilizando-o para desenvolver aplicações web eficientes e robustas. Minha experiência inclui a criação de componentes reutilizáveis, melhorando a segurança e a clareza do código. Utilizo recursos poderosos de Intellisense, disponíveis em editores de código como Visual Studio Code, para aprimorar a eficiência do desenvolvimento em TypeScript, garantindo uma colaboração mais eficaz em projetos complexos. Estou sempre em busca de explorar as últimas funcionalidades do TypeScript para criar soluções web mais escaláveis e confiáveis.
                        </p>
                    </div>
                </HabilityContent>
                <HabilityContent>
                    <FileJs size={64} />
                    <div>
                        <h4>NodeJS</h4>
                        <p>
                        Além disso, meu conhecimento básico em backend com Node.js me proporcionou uma compreensão sólida das operações do lado do servidor, integração de banco de dados e garantia de segurança e desempenho em aplicações web.
                        </p>
                    </div>
                </HabilityContent>
                
            </HabilityContainer>


        </AboutMeContainer>
    )
}