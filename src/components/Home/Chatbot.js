import React from 'react'
import chatbot from '../../resources/images/41617-chatbot 1.svg'
function Chatbot() {
  const style = {
    width:'118px',
    height:'118px',
    position:'absolute',
    overflow:'hidden',
    top:'50px',
    right:'0px'
  }
  return (
    <div style={style}>
        <img src={chatbot} alt="chabot" className="img-fluid"/>
    </div>
  )
}

export default Chatbot