import style from "../../../stylesheet/member.module.css";

export default function StrukturalCard({jabatan = '', members = []}) {
  return (
    <div className={`${style.card} d-flex flex-column align-items-center gap-2 pt-2 mt-4`}>
      <h1 className={style.title}>{jabatan}</h1>
      <div className='d-flex justify-content-evenly w-100'>
        {members.map((member, index) =>
          <div key={index} className='d-flex flex-column align-items-center gap-2'>
            <img src={`pictures/member/${member.panggilan || 'grey'}.png`} alt={member.nama}/>
            <p className='mt-1'>{member.nama}</p>
          </div>
        )}
      </div>
    </div>
  )
}