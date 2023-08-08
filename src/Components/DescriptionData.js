import React from 'react'
import "./destination.css";




const DescriptionData = (props) => {
  return (
    <React.Fragment>
        <div className={props.className}>
          <div className="des-text">
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
          </div>
          <div className="image">
            <img src={props.img1} alt="img" />
            <img src={props.img2} alt="img" />
          </div>
        </div>
    </React.Fragment>
  )
}

export default DescriptionData;