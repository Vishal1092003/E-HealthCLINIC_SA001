import React from 'react'
import { NavLink } from 'react-router-dom'
import leafletWeather from './leafletWeather'
import Newmap from './Newmap'
function Dashboard() {
  return (
    <div>
         <h1>Select what do you want to do ?</h1>
         <p>
            see the map click on : 
            <NavLink to='/map'>locate</NavLink>
         </p>
         <p>
            see the forcast click on : 
            <NavLink to='/weatherForcast'>Weather Forcast</NavLink>
         </p>
         <br/>
          <p>
            see the new map click on : 
            <NavLink to='/newmap'>new map </NavLink>
         </p>
    </div>
  )
}

export default Dashboard
