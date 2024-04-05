import style from '../../stylesheet/member.module.css'

export default function GenSwitch({gen, changeGen}) {
  return (
    <div className="d-flex justify-content-center fs-3 my-5 gap-3">
      <button onClick={() => changeGen(12)} type="button" className={`${style.button} ${gen == 12 ? style.active : ''}`}>Gen 12</button>
      <button onClick={() => changeGen(13)} type="button" className={`${style.button} ${gen == 13 ? style.active : ''}`}>Gen 13</button>
    </div>
  )
}