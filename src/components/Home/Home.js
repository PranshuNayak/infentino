import React from 'react'
import logo from '../../resources/images/7 2 (Traced).svg'
import Chatbot from './Chatbot'

import Ellipse from './Ellipse'

import Navbar from './Navbar'
import './style.css'
function Home() {
  const style = {
    fontWeight:"700",
    position:'relative',
    overflow:'hidden'
  }
  return (
    <div className="row justify-content-center align-items-center vh-100 text-light" style={style}>
        <div className="col-6 image1 vh-100 p-5">
        <div className="row">
            <div className="col-12  mb-5">
                <div className="row">
                    <div className="col-2">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="col-4 h3 text-left">
                        infentino
                    </div>
                </div>
            </div>
            <div className="col-12  lead ">Welcome to Infentino</div>
            <div className="col-8  mt-2 mb-5 h1">We power brands to build big</div>
            <div className="col-5  ">
                <button className="btn btn-outline-light w-100">Join</button>
            </div>
        </div>
        </div>
        <div className="col-6">
            <div className="row vh-100" style={{position:'relative',overflow:'hidden'}}>

            <Navbar/>
            <div className="d-lg-block d-none col-12 image2" style={{height:'100%'}}></div>
            <Chatbot/>
            <Ellipse/>
            </div>
        </div>
    </div>
  )
}

export default Home