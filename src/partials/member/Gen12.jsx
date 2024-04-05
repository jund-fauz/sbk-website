import Leader from "./struktur/Leader.jsx";
import StrukturalCard from "./struktur/StrukturalCard.jsx";

export default function Gen12() {
  return (
    <>
      <Leader
        members={[
          {
            nama: 'Muhammad Syafiq Addi Maysqi',
            panggilan: 'syafiq'
          }, {
            nama: 'Aghniya Adz Dzikri',
          }
        ]}
      />
      <StrukturalCard
        jabatan='SekBen'
        members={[
          {
            nama: 'Muhammad Rizal Khoirul Anam',
            panggilan: 'rizal'
          }, {
            nama: 'Keyla Fianti Choirun Nisa'
          }
        ]}
      />
      <StrukturalCard
        jabatan='Lab Barat'
        members={[

        ]}
      />
      <StrukturalCard
        jabatan='Lab Tengah'
        members={[

        ]}
      />
      <StrukturalCard
        jabatan='Lab Timur'
        members={[

        ]}
      />
      <StrukturalCard
        jabatan='Dekdok'
        members={[
          {
            nama: 'Ahmad Ardiansyah Putrahidayah',
            panggilan: 'ahmad'
          }, {
            nama: 'Tandra Muhammad Annadma',
            panggilan: 'tandra'
          }, {
            nama: 'Athaya Dea Khoirunnisa '
          }, {
            nama: 'Cahya Aulia Fatma Puri'
          }
        ]}
      />
    </>
  )
}