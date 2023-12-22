import Style from './../styles/Home.module.css'
import Link from 'next/link'

export default function button(props){
    return(
        <Link href="https://api.whatsapp.com/send?phone=558299527477&text=Ol%C3%A1%20Paulo%2C%20fiquei%20enteressado(a)%20no%20seu%20plano%20de%20treino%2C%20gost%C3%A1ria%20de%20saber%20mais.">
        <button id="button-zap" className={Style.ButtonContatoPage} onClick={()=>{console.log("")}}>{props.titulo}</button>
        </Link>
    )
}