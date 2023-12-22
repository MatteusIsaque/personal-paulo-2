import Style from './../styles/Home.module.css'

import Image from 'next/image'

import Espelho from './../img/foto-espelho.jpeg'
import Whats from './../img/msg-whats.jpeg'
import { useEffect, useState } from 'react'



export default function provaSocial() {

    const [largura, setLargura] = useState()

    useEffect(() => {

        const width = window.innerWidth

        if (width >= 630) {
            setLargura(true)
        } else {
            setLargura(false)
        }

    })

    return (
        <section className={Style.ProvaSocial}>
            <div>
                <h2>Leia com atenção!</h2>
                <p>
                    Os seus resultados não dependem da sua academia ou do local que você está. O que você sabe sobre treinos e tudo envolvido é o que vai fazer você ter resultados. Então se você ainda está perdido e quer ter uma evolução definitiva em seu corpo, recuperando o orgulho de sair nas fotos esse é o primeiro passo.
                </p>
            </div>
            <div className={Style.image}>
                <div>
                    <Image src={Espelho} width={320} height={569} />
                </div>
                <div>
                    <Image src={Whats} width={320} height={569} />
                </div>
            </div>
        </section>
    )
}