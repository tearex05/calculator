import React, {useState} from 'react'
import './App.css'
import {Link} from 'react-router-dom'

function Service(props){
  return(
    <Link to={props.link} className="service-body">
      <p className="service-info">{props.info}</p>
    </Link>
    )
}

function App() {

  return (
    <>
    <div className='container'>
      <h1 className='main-title'>What Do You Want To Calculate?</h1>
      <div className="services">
        <Service link='/bmi' info='BMI Calculator' />
        <Service link='/age' info='Age Calculator' />
      </div>
    </div>
    </>
  )
}

export default App