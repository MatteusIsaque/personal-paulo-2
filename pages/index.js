import FirstSection from './../components/FirstComponent'
import TwoSection from './../components/VideoSection'
import Perguntas from './../components/Perguntas'
import Footer from './../components/BeneficioOnline'
import Tabela from '../components/Tabela'
import SegundaDiv from './../components/segundaDiv'
import ProvaSocial from './../components/prova-social'
import Desenvolvido from './../components/desenvolvido'
import Zap from './../components/zapButton'
import Popup from '../components/popUp'

export default function Home() {
  return (

    <section>
      <FirstSection />
      <SegundaDiv />
      <TwoSection />
      <Perguntas />
      <Tabela />
      <ProvaSocial />
      <Footer />
      <Desenvolvido />
      <Zap />
      <Popup />
    </section>
  )
}
