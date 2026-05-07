import React from 'react'

const CarouselImage = (props) => {
  return (
    <div>
        <img src={props.text} style={{height:"400px",width:"250vh"}} alt=""/>
    </div>
  )
}

export default CarouselImage;