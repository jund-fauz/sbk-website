import {useEffect, useRef, useState} from "react";

export default function Navbar() {
  let memberRef = useRef()
  const [right, setRight] = useState(0)

  useEffect(() => {
    setRight(Math.round(memberRef.getBoundingClientRect().right))
  }, [])
  return (
    <nav>
      <a href="/">
        <img
          className="position-absolute top-50"
          src="/pictures/sbk-navbar.png"
          alt="SBK"
        />
      </a>
      <div className="position-absolute top-50 start-50 translate-middle d-flex">
        <a href="/mikrotik">mikrotik</a>
        <a href="/learn-basic">learn basic</a>
        <a href="/member?gen=13" ref={ref => {
          memberRef = ref
        }}>member</a>
        <a href="/xtra">xtra</a>
      </div>
      {/*<div className='position-absolute dropdown' style={{right: `${right}px`}}>*/}
      {/*  <a href="#">Test</a>*/}
      {/*</div>*/}
      <a href="/sbk-store" className='position-absolute top-50 translate-middle-y'>
        <i className="fa-solid fa-cart-shopping"/>
      </a>
    </nav>

  )
}