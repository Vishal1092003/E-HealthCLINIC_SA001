import React, { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Map from './pages/Map';
import WeatherForcast from './pages/WeatherForcast';
function App() {

  return (
    <BrowserRouter>
         <Routes>
           <Route path='/' element={<Dashboard/>}/>
           <Route path='/map' element={<Map/>}/>
           <Route path='/weatherForcast' element={<WeatherForcast/>}/>
         </Routes>
    </BrowserRouter>
    
  );
}

export default App;





/*
The syntax <> </> in React is a shorthand for a React Fragment. React Fragments are used to group multiple elements without adding an extra node to the DOM.
*/