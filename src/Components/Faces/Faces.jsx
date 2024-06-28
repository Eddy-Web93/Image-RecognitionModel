import React from 'react'
import "./Faces.css"

const Faces = (props) => {
  return (
    <div className='face'>
      <div className="box">
      <img src={props.image} alt="" id='input-image' style={{maxWidth :"500px", height:"auto", maxHeight: "400px"}} className="face-img" />
        <div className="border-face" style={{top: props.size.topRow , bottom: props.size.bottomRow, right: props.size.rightCol, left: props.size.leftCol,}}></div>
      </div>
    </div>
  )
}

export default Faces