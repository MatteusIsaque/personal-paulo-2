import '../styles/globals.css'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'



function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    const tagIntem = {
      gtmId: "GTM-K8K37P3",
      events: {
        onclick
      }
    }
      
  TagManager.initialize(tagIntem)
  },[])

  return <Component {...pageProps} />

}

export default MyApp
