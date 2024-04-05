import StrukturalCard from "./StrukturalCard.jsx";

const leaderGrid = {
  gridTemplateColumns: '.5fr .5fr',
  gap: '2vw'
}

export default function Leader({members}) {
  return (
    <div className='d-grid w-100' style={leaderGrid}>
      <StrukturalCard jabatan='Ketua' members={[members[0]]} />
      <StrukturalCard jabatan='Korwat' members={[members[1]]} />
    </div>
  )
}