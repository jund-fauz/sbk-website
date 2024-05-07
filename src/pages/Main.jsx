import AnimatedPage from "../partials/animation/AnimatedPage.jsx";
import SBK from "../partials/main/SBK.jsx";
import BGBlack from "../partials/main/BGBlack.jsx";
import Cards from "../partials/main/Cards.jsx";
import AnotherFeaturesOfSBK from "../partials/main/AnotherFeaturesOfSBK.jsx";
import LearnBasics from "../partials/main/LearnBasics.jsx";
import '../stylesheet/index.css'

export default function Main() {
  return (
    <AnimatedPage>
      <SBK/>
      <BGBlack/>
      <div className="bg-white third-content d-flex flex-column" style={{gap: '250px', marginTop: '200px'}}>
        <Cards/>
        <LearnBasics/>
      </div>
      <AnotherFeaturesOfSBK/>
    </AnimatedPage>
  )
}