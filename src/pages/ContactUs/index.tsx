import { Title } from "../../components/Title"
import { ContactUsContainer, ContactUsContent } from "./styles"

import { At, WhatsappLogo } from "@phosphor-icons/react"

export const ContactUs = () => {
    return(
        <ContactUsContainer>
            <Title title="CONTATO"/>
            
            <h2>Sinta-se avontade para falar comigo</h2>

            <ContactUsContent>
                <a href="mailto:dafgo03@gmail.com" target="_blank">
                    <At size={64}/>
                    <div>
                        <p>E-mail</p>
                        <p>Dafgo03@gmail.com</p>  
                    </div>
                </a>
                <a href="https://wa.me/+5561986548270" target="_blank">
                    <WhatsappLogo size={64}/>
                    <div>
                        <p>WhatsApp</p>
                        <p>(61)98654-8270</p>  
                    </div>
                </a>
            </ContactUsContent>

            <h3>Obrigado pela paciência</h3>
        </ContactUsContainer>
    )
}