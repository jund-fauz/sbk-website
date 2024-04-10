import style from "../../../stylesheet/member.module.css";

export default function StrukturalCard({jabatan = '', members = []}) {
  const few = members.length < 5
  let justifyContent;
  switch (members.length) {
    case 1:
      justifyContent = 'center'
      break
    case 2:
      justifyContent = 'around'
      break
    default:
      justifyContent = 'evenly'
  }
  return (
    <div className={`${style.card} d-flex flex-column align-items-center gap-2 pt-2 mt-4`}>
      <h1 className={style.title}>{jabatan}</h1>
      <div className={`d-flex justify-content-${justifyContent} w-100`}>
        {few ? members.map((member, index) =>
          <div key={index} className='d-flex flex-column align-items-center gap-2'>
            <img src={`pictures/member/${member.panggilan || 'grey'}.png`} alt={member.nama}/>
            <p className='mt-1'>{member.nama}</p>
          </div>
        ) : <div>

        </div>}
      </div>
    </div>
  )
}