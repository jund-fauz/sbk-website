function Petinggi({jabatan, nama, gambar, alt, marginTop}) {
  return (
    <div className={"position-relative mt-" + marginTop}>
      <img
        src={`/pictures/${gambar}`}
        alt={alt}
        className="mt-2 ms-4 rounded"
      />
      <h1 className="title text-center position-absolute top-0 w-100">
        {jabatan}
      </h1>
      <p className="text-black text-capitalize position-absolute top-50 start-50 translate-middle">
        {nama}
      </p>
    </div>
  )
}

export default Petinggi