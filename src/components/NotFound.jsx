import React, {useState, useEffect} from 'react'
import './NotFound.css'
import {useNavigate} from 'react-router-dom'
import ParticleBackground from './ParticleBackground';
import NotFound_Intro from './NotFound_Intro';

export default function NotFound() {

  const navigate = useNavigate();


  setTimeout(()=>{
    navigate('/')
  }, 10000)



  return (
    <div className='notFound'>
      <NotFound_Intro/>
      <ParticleBackground/>
    </div>
  )
}
