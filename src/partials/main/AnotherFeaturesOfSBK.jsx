import {useState} from "react";

function AnotherFeaturesOfSBK() {
  const parallax = () => {
    const scroll = window.scrollY - 1711
    setClipLong(`polygon(0 0, ${20 + scroll / 15}% 0, ${3 + scroll / 15}% 100%, 0 100%)`)
    setClipShort(`polygon(0 0, ${30 + scroll / 15}% 0, ${3 + scroll / 15}% 100%, 0 100%)`)
  }
  window.addEventListener('scroll', parallax)
  const [clipLong, setClipLong] = useState('')
  const [clipShort, setClipShort] = useState('')
  return (
    <div className="bg-color-primary pt-5">
      <div className="container">
        <h1 className="fw-bold text-white mb-5">another features</h1>
        <div className="d-grid grid-4">
          <div className="container position-relative">
            <span className="overlay bg-1" style={{clipPath: clipLong}}/>
            <h1 className='text-white'>sBK store</h1>
            <a href="#">Let’s go shopping -&gt;</a>
          </div>
          <div className="container position-relative">
            <span className="overlay bg-5" style={{clipPath: clipShort}}/>
            <h1 className='text-white'>member</h1>
            <a href="#">know us -&gt;</a>
          </div>
        </div>
        <div className="d-grid grid-4">
          <div className="container position-relative">
            <span className="overlay bg-3" style={{clipPath: clipShort}}/>
            <h1>sBK xtra</h1>
            <a href="#">check another things -&gt;</a>
          </div>
          <div className="container position-relative">
            <span className="overlay bg-4" style={{clipPath: clipLong}}/>
            <h1>mIKROTIK academy</h1>
            <a href="#">learn more -&gt;</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnotherFeaturesOfSBK