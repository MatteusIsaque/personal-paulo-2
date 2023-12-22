import Style from './../styles/Home.module.css'

export default function segundaDiv() {
    return (
        <section className={Style.segundaDiv}>
            <h2>BENEFICIOS DA CONSULTORIA</h2>
            <div className={Style.BlocoItens}>
                <div>
                    <h3>Treino Completo:</h3>
                    <p>Irei fazer uma avaliação completa e definir uma rotina de exercícios que irão desde as partes inferiores até as superiores. Esse cronograma será descrito de acordo com seu perfil.</p>
                </div>
                <div>
                    <h3>Suporte para tirar dúvidas:</h3>
                    <p>Você terá acesso direto a mim para poder tirar suas dúvidas e receberá auxílio de um profissional</p>
                </div>
                <div>
                    <h3>Otimização de treino:</h3>
                    <p>Tenha o treino modificado de acordo com a sua evolução, criando novas metas a serem alcançadas.</p>
                </div>
                <div>
                    <h3>Horários flexíveis:</h3>
                    <p>Agende o melhor dia e hora para começar os seus treinamentos</p>
                </div>
            </div>
        </section>
    )
}