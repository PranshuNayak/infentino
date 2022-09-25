import React from 'react'

function Ellipse() {
  const style = {
    outer:{
        width:'500px',
        height:'500px',
        border:'30px solid white',
        opacity:'0.3',
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        overflow:'hidden',
        top:'-320px',
        right:'-150px'
    },
    inner:{
        width:'400px',
        height:'400px',
        border:'30px solid #ca86cd',
        opacity:'0.5',
        borderRadius:'50%'
    }
  }
  return (
    <div style={style.outer}>
        <div style={style.inner} />
    </div>
  )
}

export default Ellipse