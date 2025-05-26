import Style from './../styles/Home.module.css'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import ImagePaulo from './../img/academia.png'




export default function videoSection() {

    return (
        <section className={Style.SectionVideo}>
            <div className={Style.divVideoOne}>
                <Image src={ImagePaulo} width={306} height={403} layout="responsive" />
                <ReactPlayer width="100%" url="https://youtube.com/embed/XQt7-512emw" />
            </div>


            <div className={Style.divVideoTwo}>
                <h2>A CONSULTORIA QUE VAI TRANSFORMAR SEUS RESULTADOS</h2>
                <p>Depois de anos ajudando alunos por meio da consultoria online, criei um método direto, eficaz e acessível. Nele, ensino como executar os exercícios corretamente, superar falhas, mudar hábitos que travam seu progresso e alcançar o corpo que você sempre quis.

Chegou a hora de sair da estagnação e dar o próximo passo. Com o suporte certo, você chega lá!</p>
                <ReactPlayer width="100%" url="https://www.youtube.com/embed/BuUambqsDxE" />
            </div>
        </section>
    )
}
