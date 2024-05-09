import style from '../../stylesheet/member.module.css'

export default function Petinggi({jabatan, nama, gambar, alt, mt, my}) {
  return (
    <div className={`position-relative bg-white mt-${mt}`} style={{width: '70%', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}>
      <img
        src={`/pictures/${gambar}.png`}
        alt={alt}
        className={`my-${my} ms-4 rounded`}
        style={{scale: '80%'}}
      />
      <h1 className={`${style.title} text-center position-absolute w-100`} style={{top: `${my / 2}vw`}}>
        {jabatan}
      </h1>
      <p className="text-black text-capitalize position-absolute top-50 start-50 translate-middle">
        {nama}
      </p>
    </div>
  )
}