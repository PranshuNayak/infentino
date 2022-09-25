import React from 'react'

function UpperBorder({align,textAlign,text1,text2}) {
  const style = {
    height: '4.03px',
    backgroundColor:'#F050BE'
  }
  return (
    <div className='col-12 mb-3'>
      <div className={`row ${align}`}>
      <div className={`col-3  mb-2`} style={style}/>
      <div className={`col-12 ${textAlign} text-dark h3`}>{text1}</div>
      <div className={`col-12 ${textAlign} text-dark h3`}>{text2}</div>
      </div>
    </div>
  )
}

export default UpperBorder