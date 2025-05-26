import Image from 'next/image'
import Logo from './../img/Logo.png'

import Style from './../styles/Home.module.css'


import Button from './../components/button'

export default function Perguntas() {

    return (
        <section className={Style.SectionPerguntas}>
            <div>
                <Image src={Logo} width={458} height={379} layout="responsive" />
            </div>
            <div className={Style.Perguntas}>
                <h2>COMO FUNCIONA A CONSULTORIA DE TREINO ONLINE?</h2>
                <p>Primeiro, faremos uma análise da sua situação atual. Em seguida, iniciaremos com um plano de treino personalizado, alinhado às suas necessidades e objetivos.</p>

                <h2>COMO O TREINO É DISTRIBUÍDO?</h2>
                <p>Eu irei montar todo o planejamento com base nas suas metas e necessidades individuais.</p>

                <h2>COMO FUNCIONA O SUPORTE?</h2>
                <p>Você terá contato direto com o seu personal trainer, Paulo Eduardo, por meio do nosso aplicativo ou, se preferir, pelo WhatsApp.</p>

                <h2>SE EU TIVER ALGUMA DÚVIDA SOBRE O TREINO OU QUALQUER OUTRO ASSUNTO, POSSO FALAR COM ELE?</h2>
                <p>Sim, com certeza! O meu objetivo é o mesmo que o seu: conquistar resultados. Você terá meu suporte em cada passo da sua jornada — então, por que não aproveitar?</p>
            </div>
        </section>
    )
}
