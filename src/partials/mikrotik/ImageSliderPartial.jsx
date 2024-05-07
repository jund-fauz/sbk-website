import {body, btn, main, nav} from '../../stylesheet/mikrotik.module.css'
import ImageSlider from "./ImageSlider.jsx";
import ImageSliderContainer from "./ImageSliderContainer.jsx";
import {useEffect, useState} from "react";

const contents = [
  {
    title: 'Lossless Youths',
    image: 'cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
    description: ` Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim. `
  },
  {
    title: 'vlan configuration',
    image: 'i.redd.it/tc0aqpv92pn21.jpg',
    description: ` Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim. `
  },
  {
    title: 'The Gate Keeper',
    image: 'wharferj.files.wordpress.com/2015/11/bio_north.jpg',
    description: ` Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim. `
  },
  {
    title: 'Last Trace Of Us',
    image: 'images7.alphacoders.com/878/878663.jpg',
    description: ` Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim. `
  },
  {
    title: 'Urban Decay',
    image: 'theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
    description: ` Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim. `
  },
  {
    title: 'The Migration',
    image: 'da.se/app/uploads/2015/09/simon-december1994.jpg',
    description: ` Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim. `
  }
]

export default function ImageSliderPartial() {
  const [contentComponent, setContentComponent] = useState(contents.map((content, key) => {
    let {title, image, description} = content
    return <ImageSlider title={title} image={image} description={description} key={key}/>
  }))

  function activate(isNext) {
    const nextContentComponent = isNext ? [
      ...contentComponent.slice(1),
      contentComponent[0]
    ] : [
      ...contentComponent.slice(-1),
      ...contentComponent.slice(0, -1)
    ]
    setContentComponent(nextContentComponent)
  }

  useEffect(() => {
    console.log(contentComponent.slice(-1))
  }, [contentComponent])
  return (
    <div className={body}>
      <div className={main}>
        <ImageSliderContainer>
          {contentComponent}
        </ImageSliderContainer>
        <div className={nav}>
          <button className={btn} onClick={() => activate(false)}>
            <i className='fa-solid fa-arrow-left'/>
          </button>
          <button className={btn} onClick={() => activate(true)}>
            <i className='fa-solid fa-arrow-right'/>
          </button>
        </div>
      </div>
    </div>
  )
}