import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import Cursor from "./Cursor"; // Ensure Cursor is correctly implemented
import { useState } from "react";
function Map() {
    const [position, setpositon] = useState({
      lat: 28.704060,
      lng: 77.102493,
        })
   
        const handlemovement=(event)=>{
           const lat=event.latLng.lat();
           const lng=event.latLng.lng();
           setpositon({lat,lng});
        }

  const defaultProps = {
    center: {
      lat: 28.704060,
      lng: 77.102493,
    },
    zoom: 11,
  };

  const containerStyle = {
    width: "50%",
    height: "50vh",
  };

  return (
    <div>
    <LoadScript googleMapsApiKey={process.env.api_key}>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={defaultProps.zoom}
        onClick={handlemovement}
      >
       
        <Marker position={position}/>
        {/* <Cursor /> */}

      </GoogleMap>
    </LoadScript>
    </div>
  
  );
}

export default Map;
