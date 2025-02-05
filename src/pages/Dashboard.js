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
           <NavLink to='/signup'>User SignIn</NavLink>
         </p>


    </div>
  )
}

export default Dashboard
