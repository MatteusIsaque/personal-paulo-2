import Buttom from './button'
import Link from 'next/link'
import Image from 'next/image'

export default function ConsultoriaOnline() {

    return (
        <footer>

            <h2>Algum dos benefícios da consultoria online</h2>
            <p>Treine Independente se você estiver viajando, de férias, no trabalho ou em casa, você poderá levar os programas de exercícios para qualquer lugar onde você for. Com os horários flexíveis você pode escolher a hora que deseja entrar em contato com seu personal. Nada de treinos gravados, será tudo feito e planejado para você ter um grande progresso que será monitoriado pelo seu personal.
                </p>


            <div style={{ display: "flex", justifyContent: "center", margin: "20px 0px" }}>
                <Buttom titulo="Fale agora com seu Personal" />
            </div>
        </footer>
    )
}