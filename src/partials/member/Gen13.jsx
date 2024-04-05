import Leader from "./struktur/Leader.jsx";
import StrukturalCard from "./struktur/StrukturalCard.jsx";

export default function Gen13() {
  return (
    <>
      <Leader
        members={[
          {
            nama: 'Arqian Hamzah',
            panggilan: 'hamzah'
          }, {
            nama: 'Keyla Fianti Choirun Nisa'
          }
        ]}
      />
      <StrukturalCard
        jabatan='SekBen'
        members={[
          {
            nama: 'Gavra Darius Ulul Albab',
            panggilan: 'gavra'
          }, {
            nama: 'Anjani Arizkawati'
          }
        ]}
      />
      <StrukturalCard
        jabatan='Lab 1'
        members={[
          {
            nama: 'Muhammad Ghofur Al-Ghifari'
          }, {
            nama: 'Aryan Rostiansyach'
          }, {
            nama: 'Siti Rismawati'
          }, {
            nama: 'Sarah Az-Zahra'
          }
        ]}
      />
      <StrukturalCard
        jabatan='Lab 2'
        members={[
          {
            nama: 'Roshan Muhammad Arfan'
          }, {
            nama: 'Ilham Wijayanto Al-Muhsin'
          }, {
            nama: 'Annisa Nurul `Aini'
          }, {
            nama: 'Naila Zakiyyatunnisa'
          }
        ]}
      />
      <StrukturalCard
        jabatan='Lab 3'
        members={[
          {
            nama: 'Mujadid Jundi Fauzi'
          }, {
            nama: 'Hudzaifah'
          }, {
            nama: 'Aprilia Ayu Nura`ini'
          }, {
            nama: 'Rufaidah Syafa Annisa'
          }
        ]}
      />
      <StrukturalCard
        jabatan='Pubdok'
        members={[
          {
            nama: 'Tandra Muhammad Annadma',
            panggilan: 'tandra'
          }, {
            nama: 'Asyraf Zahirul Fikr El Jihady'
          }, {
            nama: 'Asyifa Salsabila'
          }, {
            nama: 'Ashfa Nur Azmina'
          }
        ]}
      />
      <StrukturalCard
        jabatan='Logistik'
        members={[

        ]}
      />
    </>
  )
}