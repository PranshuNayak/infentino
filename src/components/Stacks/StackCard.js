import React from 'react'
import BorderBottom from './BorderBottom'

function StackCard({stack}) {
  return (
    <div className="col-sm-5 col-12  my-2 mx-3">
        <div className="row">
            <div className="col-12 my-2"><img src={stack.icon} alt={stack.title}/></div>
            <div className="col-12 my-2 text-capitalize">{stack.title}</div>
            <BorderBottom color={stack.borderColor}/>
            <div className="col-12 my-2">{stack.text}</div>
        </div>
    </div>
  )
}

export default StackCard