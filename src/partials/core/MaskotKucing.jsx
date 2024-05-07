import {useEffect, useState} from "react";
import sleep from "../../function/sleep.js";

export default function MaskotKucing() {
  const [mripat, setMripat] = useState('melek')
  async function kedep() {
    while (true) {
      await sleep(2)
      setMripat('merem')
      await sleep(1)
      setMripat('melek')
      await sleep(0.5)
      setMripat('merem')
      await sleep(0.25)
      setMripat('melek')
    }
  }
  useEffect(() => {
    kedep()
  }, [])
  return <img src={`/pictures/kucing-${mripat}.png`} alt="MaskotKucing" style={{
    position: 'absolute',
    top: '-65%',
    right: '5%',
    zIndex: 1
  }}/>
}