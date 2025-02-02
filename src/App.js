import React, { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Map from './pages/Map';
import WeatherForcast from './pages/WeatherForcast';
// import leafletWeather from './pages/leafletWeather';
import Newmap from './pages/Newmap';
import UrlSortner from './pages/UrlSortner';

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
         </Routes>
    </BrowserRouter>
    
  );
}

export default App;





/*
The syntax <> </> in React is a shorthand for a React Fragment. React Fragments are used to group multiple elements without adding an extra node to the DOM.
*/