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
          {
            nama: 'Kholid Husam Habibullah',
            panggilan: 'kholid'
          }, {
            nama: 'Ghozi Matta Alfaruq',
            panggilan: 'ghozi'
          }, {
            nama: 'Mujadid Jundi Fauzi',
            panggilan: 'jundi'
          }, {
            nama: 'Qonita Firdausi'
          }, {
            nama: 'Annisa Nurul ‘Aini'
          }
        ]}
      />
      <StrukturalCard
        jabatan='Lab Tengah'
        members={[
          {
            nama: 'Muhammad Syaif Alfatih',
            panggilan: 'syaif'
          }, {
            nama: 'Roshan Muhammad Arfan',
            panggilan: 'roshan'
          }, {
            nama: 'Dzakiyyatunnisa Fara Atikah',
          }, {
            nama: 'Asyifa Salsabila'
          }, {
            nama: 'Siti Rismawati'
          }
        ]}
        ikhwan={2}
      />
      <StrukturalCard
        jabatan='Lab Timur'
        members={[
          {
            nama: 'Imam Irsyad Ma’ruf',
            panggilan: 'imam'
          }, {
            nama: 'Arqian Hamzah',
            panggilan: 'hamzah'
          }, {
            nama: 'Gavra Darius Ulul Albab',
            panggilan: 'gavra'
          }, {
            nama: 'Nayla Nur Hidayah'
          }, {
            nama: 'Khaylila As Saudah Ramadhani'
          }, {
            nama: 'Anjani Arizkawati'
          }
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
  );
}