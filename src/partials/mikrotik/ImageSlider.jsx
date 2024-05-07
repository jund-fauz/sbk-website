import style from '../../stylesheet/mikrotik.module.css'

export default function PerImageSlider({image, title, description}) {
  return (
    <li className={style.item}
        style={{backgroundImage: `url('${image}')`}}>
      <div className={style.content}>
        <h2 className={style.title}>"{title}"</h2>
        <p className={style.description}> {description} </p>
        <button>Read More</button>
      </div>
    </li>
  )
}