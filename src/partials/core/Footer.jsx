// import FooterAnimation from "./FooterAnimation.jsx";

import MaskotKucing from "./MaskotKucing.jsx";

export default function Footer() {
  return (
    <>
      {/*<FooterAnimation />*/}
      <footer className='position-relative'>
        <MaskotKucing />
        <p>Social</p>
        <hr className="bg-white"/>
        <p>Copyright© SBK 2024</p>
      </footer>
    </>
  )
}