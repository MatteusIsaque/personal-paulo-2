import Estrela from './../img/estrela.png'
import Image from 'next/image'

import Link from 'next/link'
import Style from './../styles/Home.module.css'

export default function tabela() {

    return (
        <section className={Style.sectionTabela}>
            <table className={Style.Tabela}>
                <thead>
                    <tr>
                        <th>
                            Prata
                        </th>
                        <th>
                            <Image src={Estrela} width={20} height={20} />
                            <Image src={Estrela} width={20} height={20} />
                            <Image src={Estrela} width={20} height={20} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><span>R$</span>150<span>00</span></th>
                    </tr>
                    <tr>
                        <td>1 mês de treino</td>
                    </tr>
                    <tr>
                        <Link href="https://api.whatsapp.com/send?phone=558299527477&text=Ol%C3%A1%20Paulo%2C%20tive%20interesse%20no%20plano%20prata%2C%20gost%C3%A1ria%20de%20informa%C3%A7%C3%B5es.">
                            <button id="button-form" > Fale Conosco</button>
                        </Link>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Aplicativo</td>
                    </tr>
                    <tr>
                        <td>Treino corporal completo</td>
                    </tr>
                    <tr>
                        <td>1 Planos de treinos</td>
                    </tr>
                    <tr>
                        <td>Suporte Online</td>
                    </tr>
                    <tr>
                        <td>Horários flexíveis</td>
                    </tr>
                </tfoot>
            </table>


            <table className={Style.Tabela} style={{ border: "#FFDA2A solid 1px", boxShadow: "0px 0px 19px 0px rgba(0,0,0,0.75)" }}>
                <thead>
                    <tr>
                        <th>
                            Ouro
                        </th>
                        <th>
                            <Image src={Estrela} width={20} height={20} />
                            <Image src={Estrela} width={20} height={20} />
                            <Image src={Estrela} width={20} height={20} />
                            <Image src={Estrela} width={20} height={20} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><span>R$</span>300<span>00</span></th>
                    </tr>
                    <tr>
                        <td>3 meses de treino</td>
                    </tr>
                    <tr>

                        <Link href="https://api.whatsapp.com/send?phone=558299527477&text=Ol%C3%A1%20Paulo%2C%20tive%20interesse%20no%20plano%20ouro%2C%20gost%C3%A1ria%20de%20informa%C3%A7%C3%B5es.">
                            <button id="button-form" > Fale Conosco</button>
                        </Link>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Aplicativo</td>
                    </tr>
                    <tr>
                        <td>Treino corporal completo</td>
                    </tr>
                    <tr>
                        <td>3 Planos de treinos (um por<br /> mês)</td>
                    </tr>
                    <tr>
                        <td>Suporte Online</td>
                    </tr>
                    <tr>
                        <td>Otimização de treino mensal</td>
                    </tr>
                    <tr>
                        <td>Horários flexíveis</td>
                    </tr>
                </tfoot>
            </table>






            <table className={Style.Tabela}>
                <thead>
                    <tr>
                        <th>
                            Diamante
                        </th>
                        <th>
                            <Image src={Estrela} width={20} height={20} />
                            <Image src={Estrela} width={20} height={20} />
                            <Image src={Estrela} width={20} height={20} />
                            <Image src={Estrela} width={20} height={20} />
                            <Image src={Estrela} width={20} height={20} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><span>R$</span>600<span>00</span></th>
                    </tr>
                    <tr>
                        <td>6 meses de treino</td>
                    </tr>
                    <tr>
                        <Link href="https://api.whatsapp.com/send?phone=558299527477&text=Ol%C3%A1%20Paulo%2C%20tive%20interesse%20no%20plano%20diamante%2C%20gost%C3%A1ria%20de%20informa%C3%A7%C3%B5es.">
                            <button id="button-form"> Fale Conosco</button>
                        </Link>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Aplicativo</td>
                    </tr>
                    <tr>
                        <td>Treino corporal completo</td>
                    </tr>
                    <tr>
                        <td>6 Planos de treinos (um por<br /> mês)</td>
                    </tr>
                    <tr>
                        <td>Suporte Online</td>
                    </tr>
                    <tr>
                        <td>Otimização de treino mensal</td>
                    </tr>
                    <tr>
                        <td>6 Encontros ao vivo</td>
                    </tr>
                    <tr>
                        <td>Horários flexíveis</td>
                    </tr>
                </tfoot>
            </table>
        </section >
    )
}