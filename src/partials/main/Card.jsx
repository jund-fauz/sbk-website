export default function Card({judul, isi, gambar, reverse = false}) {
  return reverse ? (
    <div className="a-first container card-container">
      <div className="text">
        <h1 className="fs-2 text-capitalize">{judul}</h1>
        <p className="text-card">{isi}</p>
      </div>
      <img src={`/pictures/${gambar}.png`} alt={judul} className="icon w-100"/>
    </div>
  ) : (
    <div className="p-first container card-container">
      <img src={`/pictures/${gambar}.png`} alt={judul} className="icon w-100"/>
      <div className="text">
        <h1 className="fs-2 text-capitalize">{judul}</h1>
        <p className="text-card">{isi}</p>
      </div>
    </div>
  )
}