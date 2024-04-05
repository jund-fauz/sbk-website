import Card from "./Card.jsx";

export default function Cards() {
  return (
    <div className="bg-white third-content">
      <Card
        judul='learn coding'
        isi='Peroleh kemampuan untuk membuat situs web, aplikasi seluler, perangkat
          lunak, dan banyak lagi. Ini melibatkan pemahaman logika dan sintaksis
          dari bahasa pemrograman, serta pemecahan masalah dan pemikiran kritis.
          Belajar coding dapat membuka berbagai peluang karir di bidang
          teknologi dan juga dapat meningkatkan keterampilan pemecahan masalah
          dalam kehidupan.'
        gambar='bg-2'
      />
      <Card
        judul='computer & network ability'
        isi='Dapatkan pengalaman belajar, keterampilan, pengetahuan, dan sikap kompeten lebih banyak  dalam merakit, menginstall program,  merawat dan memperbaiki komputer serta jaringannya.'
        gambar='bg-3'
        reverse={true}
      />
      <Card
        judul='explore and perform'
        isi='Peroleh kemampuan untuk membuat situs web, aplikasi seluler, perangkat
              lunak, dan banyak lagi. Ini melibatkan pemahaman logika dan sintaksis
              dari bahasa pemrograman, serta pemecahan masalah dan pemikiran kritis.
              Belajar coding dapat membuka berbagai peluang karir di bidang
              teknologi dan juga dapat meningkatkan keterampilan pemecahan masalah
              dalam kehidupan.'
        gambar='bg-4'
      />
    </div>
  )
}