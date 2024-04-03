import Petinggi from "../partials/member/Petinggi.jsx";
import AnimatedPage from "../partials/animation/AnimatedPage.jsx";

function Member() {
  return (
    <AnimatedPage>
      <Petinggi jabatan='penanggung jawab' nama='devit hari ashari, s.pd.' marginTop='2' gambar='devit-cache.png'
                alt='Ustadz Devit Hari Ashari'/>
      <hr/>
      <Petinggi jabatan='pembina' nama='diantika arifianti, s.t.' marginTop='3' gambar='devit-cache.png' alt='Ustadzah Dian'/>
      <div className="d-flex justify-content-center fs-3 mb-2">
        <button type="button" className="active">
          Gen 12
        </button>
        <button type="button">Gen 13</button>
      </div>
      <div className="member-container p-4 pt-5 mt-5">
        {/*?php include 'pages/gen12.php' ?*/}
      </div>
    </AnimatedPage>

  )
}

export default Member