import React from "react"


function Hero(props) {
  var bg = props.data.image.publicURL

  return (
    <div className="hero" style={{ background: 'linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(' + bg + ') 40% 0', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="hero-wrapper">
        <div className="hero-content">
          {props.children}
          </div>
      </div>
    </div>
  )
}

export default Hero