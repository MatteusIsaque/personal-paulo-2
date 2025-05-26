import Style from './../styles/Home.module.css'

export default function segundaDiv() {
    return (
        <section className={Style.segundaDiv}>
            <h2>BENEFICIOS DA CONSULTORIA</h2>
            <div className={Style.BlocoItens}>
                <div>
                    <h3>Treino Completo:</h3>
                    <p>Farei uma avaliação detalhada e definirei uma rotina de exercícios que abrange tanto os membros inferiores quanto os superiores. Esse cronograma será elaborado de acordo com o seu perfil.</p>
                </div>
                <div>
                    <h3>Suporte para tirar dúvidas:</h3>
                    <p>Você terá acesso direto a mim para esclarecer suas dúvidas e contará com o acompanhamento de um profissional.</p>
                </div>
                <div>
                    <h3>Otimização de treino:</h3>
                    <p>Seu treino será ajustado conforme sua evolução, com novas metas sendo definidas ao longo do processo.</p>
                </div>
                <div>
                    <h3>Horários flexíveis:</h3>
                    <p>Agende o melhor dia e horário para iniciar seus treinamentos.</p>
                </div>
            </div>
        </section>
    )
}
