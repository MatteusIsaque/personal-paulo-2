import Style from './../styles/Home.module.css'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import ImagePaulo from './../img/academia.png'




export default function videoSection() {

    return (
        <section className={Style.SectionVideo}>
            <div className={Style.divVideoOne}>
                <Image src={ImagePaulo} width={306} height={403} layout="responsive" />
                <ReactPlayer width="100%" url="https://www.youtube.com/embed/YdqnYk4i42I" />
            </div>


            <div className={Style.divVideoTwo}>
                <h2>A CONSULTORIA VAI TE AJUDAR A CHEGAR NO SEU OBJETIVO</h2>
                <p>Com alguns anos de experiência oferecendo consultoria online, eu desenvolvi técnicas simples para ensinar meus alunos a maneira correta de praticar os exercícios, melhorar em suas falhas, mudar os hábitos que impedem o desenvolvimento e assim conseguir alcançar seus objetivos.<br/><br/>

                    Vamos combinar, agora ficou mais fácil chegar nos seus resultados.</p>
                <ReactPlayer width="100%" url="https://www.youtube.com/embed/BuUambqsDxE" />
            </div>
        </section>
    )
}