import React from 'react'
import { NavLink } from 'react-router-dom'
// import leafletWeather from './leafletWeather'
// import Newmap from './Newmap'
// import UrlSortner from './UrlSortner'
// import WeatherForcast from './WeatherForcast'

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
         <p>
          To make url shorter
           <NavLink to='/url'>url shortner</NavLink>
         </p>
         <p>
          To learn about cookie signup
           <NavLink to='/signup'>User SignUp</NavLink>
         </p>
         <p>
          To learn about cookie  signin
           <NavLink to='/signin'>User SignIn</NavLink>
         </p>

           <p>
          To print your result
           <NavLink to='/result'>PRINT RESULT</NavLink>
         </p>
         <p>
         To Make an appointment
          <NavLink to='/appointment'>Appointment</NavLink>
         </p>
         <p>
         To Make an appointment
          <NavLink to='/homepage'>Home Page</NavLink>
         </p>

          <p>
         To generate a qr
          <NavLink to='/qr'>Qr code generation</NavLink>
         </p>

    </div>
  )
}

export default Dashboard
