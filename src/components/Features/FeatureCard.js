import React from 'react'

function FeatureCard({feature}) {
  const style = {
    border:"5px solid #F6F6F6D6",
    height:"120px",
    width:"120px",
    borderRadius:"50%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
  return (
    <div className="col-md-3 col-sm-5 col-6">
        <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
                <div style={style}>
                <img src={feature.icon} alt={feature.text}/>
                </div>
            </div>
            <div className="col-12 mt-2 h4 text-capitalize text-center">{feature.text}</div>
        </div>
    </div>
  )
}

export default FeatureCard