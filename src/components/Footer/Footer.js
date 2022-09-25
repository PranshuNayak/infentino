import React from 'react'
import Ellipse from './Ellipse'
import Table from './Table'

function Footer() {
  const data = [
    {
        heading:'Company',
        items:['about us','portfolio','pricing','contact']
    },
    {
        heading:'Cotact',
        items:['Quote','infentino@gmail.com','9843753330']
    },
    {
        heading:'More',
        items:['Instagram','Facebook','Linkedin']
    }
  ]
  const style = {
    background: '#0E0E2C',
    position:'relative',
    overflow:'hidden'
  }
  return (
    <div className="row p-4" style={style}>
        {
            data.map((data,index)=>(
                <Table key={index} data={data} />
            ))
        }
        <Ellipse/>
    </div>
  )
}

export default Footer