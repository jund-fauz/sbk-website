export default function Member({member = {nama: '', panggilan: ''}}) {
  return (
    <div className='d-flex flex-column align-items-center gap-2'>
      <img src={`pictures/member/${member.panggilan || 'grey'}.png`} alt={member.nama}/>
      <p className='mt-1'>{member.nama}</p>
    </div>
  )
}