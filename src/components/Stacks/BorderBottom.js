import React from 'react'

function BorderBottom({color}) {
  const style = {
    height:'5px',
    backgroundColor:`${color}`,
    borderRadius:'2px'
  }
  return (
    <div style={style} className="col-12"/>
  )
}

export default BorderBottom