import React, { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Map from './pages/Map';
import WeatherForcast from './pages/WeatherForcast';
// import leafletWeather from './pages/leafletWeather';
import Newmap from './pages/Newmap';
import UrlSortner from './pages/UrlSortner';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';
import Result from './pages/Result';
import Appointment from './pages/Appointment';
import BookAppointment from './pages/BookAppointment';
import Homepage from './pages/Homepage';

function App() {

  return (
    <BrowserRouter>
         <Routes>
           <Route path='/' element={<Dashboard/>}/>
           <Route path='/map' element={<Map/>}/>
           <Route path='/weatherForcast' element={<WeatherForcast/>}/>
          <Route path='/leaflet' element={<leafletWeather/>}/>
           <Route path='/newmap' element={<Newmap/>}/>
           <Route path='/url' element={<UrlSortner/>}/>
           <Route path='/Signup' element={<SignUp/>}/>
             <Route path='/Signin' element={<Signin/>}/>
             <Route path='/result' element={<Result/>}/>
             <Route path='/appointment' element={<Appointment/>}/>
             <Route path='/book-appointment' element={<BookAppointment/>}/>
             <Route path='/homepage' element={<Homepage/>}/>
         </Routes>
    </BrowserRouter>
    
  );
}

export default App;





/*
The syntax <> </> in React is a shorthand for a React Fragment. React Fragments are used to group multiple elements without adding an extra node to the DOM.
*/