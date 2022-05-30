import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import thippyq from '../assets/icons/ThippyQ.png'
import trafficRules from '../assets/icons/1-traffic-rules.jpg'
import vehicleTechnique from '../assets/icons/2-vehicle-technique.jpg'
import crash from '../assets/icons/3-crash.jpg'
import driverResponsibility from '../assets/icons/4-driver-responsibility.jpg'
import firstAid from '../assets/icons/5-first-aid.jpg'
import maintenence from '../assets/icons/6-maintenence.jpg'
import driverAttribute from '../assets/icons/7-driver-attribute.jpg'
import driverHealth from '../assets/icons/8-driver-health.jpg'
import driverTechnique from '../assets/icons/9-driving-technique.jpg'
import trafficSign from '../assets/icons/10-traffic-sign.jpg'
import motorbikeTechnique from '../assets/icons/11-motorbike-technique.jpg'


export default function Home() {


  const questionCards = [
    {
      id: 1,
      imgUrl: trafficRules,
      linkTo: '/traffic-rules',
      alt: 'traffic-rules'
    },
    {
      id: 2,
      imgUrl: vehicleTechnique,
      linkTo: '/vehicle-technique',
      alt: 'vehicle-technique'
    },
    {
      id: 3,
      imgUrl: crash,
      linkTo: '/crash',
      alt: 'crash' 
    },
    {
      id: 4,
      imgUrl: driverResponsibility,
      linkTo: '/driver-responsibility',
      alt: 'driver-responsibility'
    },
    {
      id: 5,
      imgUrl: firstAid,
      linkTo: '/first-aid',
      alt: 'first-aid'
    },
    {
      id: 6,
      imgUrl: maintenence,
      linkTo: '/maintenence',
      alt: 'maintenence'
    },
    {
      id: 7,
      imgUrl: driverAttribute,
      linkTo: '/driver-attribute',
      alt: 'driver-attribute'
    },
    {
      id: 8,
      imgUrl: driverHealth,
      linkTo: '/driver-health',
      alt: 'driver-health'
    },
    {
      id: 9,
      imgUrl: driverTechnique,
      linkTo: '/driver-technique',
      alt: 'driver-technique'
    },
    {
      id: 10,
      imgUrl: trafficSign,
      linkTo: '/traffic-sign',
      alt: 'traffic-sign'
    },
    {
      id: 11,
      imgUrl: motorbikeTechnique,
      linkTo: '/motorbike-technique',
      alt: 'motorbike-technique'
    },
  ]

  return (
    <div className='home'>
        <header>
          <Link to="/">
            <img src={thippyq} alt="thippyq icon" />
          </Link>
          <Link to="/">
            <h2>ThippyQ</h2>
          </Link>
        </header>
        <main>
          <h2>ໝວດຄຳຖາມທັງໝົດ</h2>
          <div className="questionCard__container">
              {
                questionCards.map((questionCard)=>(
                  <Link to={questionCard.linkTo} key={questionCard.id}>
                    <div className="questionCard">
                      <img src={questionCard.imgUrl} alt={questionCard.alt}/>
                    </div>
                  </Link>
                ))
              }
          </div>
        </main>
    </div>
  )
}
