import React from 'react'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import TrafficRules from './components/TrafficRules'
import VehicleTechnique from './components/VehicleTechnique'
import Crash from './components/Crash'
import DriverResponsibility from './components/DriverResponsibility'
import FirstAid from './components/FirstAid'
import Maintenence from './components/Maintenence'
import DriverAttribute from './components/DriverAttribute'
import DriverHealth from './components/DriverHealth'
import DrivingTechnique from './components/DrivingTechnique'
import TrafficSign from './components/TrafficSign'
import MotorbikeTechnique from './components/MotorbikeTechnique'
import NotFound from './components/NotFound'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/traffic-rules' element={<TrafficRules/>}/>
          <Route path='/vehicle-technique' element={<VehicleTechnique/>}/>
          <Route path='/crash' element={<Crash/>}/>
          <Route path='/driver-responsibility' element={<DriverResponsibility/>}/>
          <Route path='/first-aid' element={<FirstAid/>}/>
          <Route path='/maintenence' element={<Maintenence/>}/>
          <Route path='/driver-attribute' element={<DriverAttribute/>}/>
          <Route path='/driver-health' element={<DriverHealth/>}/>
          <Route path='/driver-technique' element={<DrivingTechnique/>}/>
          <Route path='/traffic-sign' element={<TrafficSign/>}/>
          <Route path='/motorbike-technique' element={<MotorbikeTechnique/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
