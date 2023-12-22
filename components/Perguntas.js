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
                <p>Primeiro iremos fazer uma análise da situação atual em que você está. Em seguida estaremos começando com um plano de treino de acordo com as suas necessidades e alinharmos com os seus objetivos.</p>

                <h2>COMO É DISTRIBUÍDO O TREINO?</h2>
                <p>Eu farei todo o planejamento, baseando-se nas necessidades e objetivos.</p>

                <h2>COMO SERÁ FEITO O SUPORTE?</h2>
                <p>Contato direto com o seu PERSONAL TRAINER Paulo Eduardo, feito através de nosso aplicativo ou se preferir pelo WhatsApp.</p>

                <h2>CASO TENHA ALGUMAS DÚVIDAS SOBRE ALGUM TREINO OU ALGO RELACIONADO. EU POSSO ESTAR TIRANDO ESSAS DÚVIDAS COM ELE?</h2>
                <p>Sim, com certeza. Entenda que o meu objetivo é o mesmo que o seu, conseguir resultados. Você terá o meu auxílio em cada decisão sua. Então, porque não usar?</p>
            </div>
        </section>
    )
}