import Style from './../styles/Home.module.css'
import Image from 'next/image'
import FirstImage from './../img/primeiraImage.jpg'

import Btn from './button'

export default function FirstComponent() {

    return (
        <section className={Style.FirstComponent}>
            <div>
                <h1>
                    <span className={Style.Personal}>PERSONAL TRAINER</span><br />
                    <span className={Style.Ganhou}>ONLINE</span><br />
                </h1>
                <p>
                    Meu nome é Paulo Eduardo, sou personal trainer<br/> e estou aqui para ajudar você a conquistar seu<br/> objetivo.
                    <br /><br />- Queima de <span style={{ fontSize: "20px", fontWeight: "500" }}>Gordura</span>
                    <br />- Hipertrofia <span style={{ fontSize: "20px", fontWeight: "500" }}>Muscular</span>
                    <br />- Aulas <span style={{ fontSize: "20px", fontWeight: "500" }}>ao vivo</span> ou <span style={{ fontSize: "20px", fontWeight: "500" }}>presencial</span>
                </p>

                <Btn titulo="Garantir minha vaga" />
            </div>
        </section>
    )
}