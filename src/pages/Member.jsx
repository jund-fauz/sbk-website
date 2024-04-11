import Petinggi from "../partials/member/Petinggi.jsx"
import AnimatedPage from "../partials/animation/AnimatedPage.jsx"
import GenSwitch from "../partials/member/GenSwitch.jsx"
import {useSearchParams} from "react-router-dom"
import {useEffect, useState} from "react"
import Struktur from "../partials/member/Struktur.jsx"
import Gen12 from "../partials/member/Gen12.jsx"
import Gen13 from "../partials/member/Gen13.jsx"

export default function Member() {
  const [query] = useSearchParams()
  const [gen, setGen] = useState(parseInt(query.get('gen')))
  const changeGen = (gen) => {
    window.history.replaceState({}, '', `/member?gen=${gen}`)
    setGen(gen)
  }
  
  useEffect(() => {
    const genParam = parseInt(query.get('gen'))
    if (genParam !== 12 && genParam !== 13) {
      setGen(13)
      window.history.replaceState({}, '', '/member?gen=13')
    }
  }, [query])

  return (
    <AnimatedPage bgColor='#CECECE'>
      <Petinggi jabatan='penanggung jawab' nama='devit hari ashari, s.pd.' gambar='devit-cache'
                alt='Ustadz Devit Hari Ashari' mt='0' my='3'/>
      <Petinggi jabatan='pembina' nama='diantika arifianti, s.t.' gambar='devit-cache' alt='Ustadzah Dian' mt='5' my='4'/>
      <GenSwitch gen={gen} changeGen={changeGen} />
      <Struktur>
        {gen === 12 ? (<Gen12/>) : (<Gen13/>)}
      </Struktur>
    </AnimatedPage>

  )
}