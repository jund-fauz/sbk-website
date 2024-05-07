import {item, content, title as titleStyle, description as descriptionStyle} from '../../stylesheet/mikrotik.module.css'

export default function ImageSlider({image, title, description}) {
  return (
    <li className={item}
        style={{backgroundImage: `url('https://${image}')`}}>
      <div className={content}>
        <h2 className={titleStyle}>"{title}"</h2>
        <p className={`${descriptionStyle} fs-6`}> {description} </p>
        <button>Read More</button>
      </div>
    </li>
  )
}