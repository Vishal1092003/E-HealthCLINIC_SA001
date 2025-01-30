import React, { useState, useEffect } from "react";
import { ImAirplane } from "react-icons/im";
import { GoogleMap, Marker, useJsApiLoader, Autocomplete } from "@react-google-maps/api";

function Map() {
    
  const api_key = 'AIzaSyCx_2gG3DCx4wJoMppHzvGf7-hSWGvqc7o';
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: api_key,
    libraries: ['places'],
  });

  const [map, setmap] = useState(null);
  const [place1, setPlace1] = useState("");
  const [place2, setPlace2] = useState("");
  const [position, setPosition] = useState({
    lat: 28.704060,
    lng: 77.102493,
  });

  if (!isLoaded) {
    return <p>API KEY FROM GOOGLE MAP API IS LOADING</p>;
  }

  const handleMovement = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setPosition({ lat, lng });
  };

  const defaultProps = {
    center: {
      lat: 28.704060,
      lng: 77.102493,
    },
    zoom: 11,
  };

  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  // Handle Autocomplete for Source
  const handlePlaceChange1 = (autocomplete) => {
    const place = autocomplete.getPlace();
    if (place && place.geometry) {
      setPosition({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    } else {
      console.error("Place details not available or invalid place.");
    }
  };

  // Handle Autocomplete for Destination
  const handlePlaceChange2 = (autocomplete) => {
    const place = autocomplete.getPlace();
    if (place && place.geometry) {
      setPosition({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    } else {
      console.error("Place details not available or invalid place.");
    }
  };

  return (
    <div>
      <div>
        <label>SOURCE:</label>
        <Autocomplete
          onLoad={(autocomplete) => handlePlaceChange1(autocomplete)}
        >
          <input
            type="text"
            placeholder="Enter source location"
            value={place1}
            onChange={(e) => setPlace1(e.target.value)}
          />
        </Autocomplete>
      </div>

      <div>
        <label>DESTINATION:</label>
        <Autocomplete
          onLoad={(autocomplete) => handlePlaceChange2(autocomplete)}
        >
          <input
            type="text"
            placeholder="Enter destination location"
            value={place2}
            onChange={(e) => setPlace2(e.target.value)}
          />
        </Autocomplete>
      </div>

      <div>
        <button>
          <ImAirplane
            onClick={() => map.panTo(position)}
          />
        </button>
      </div>

      <div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          zoom={defaultProps.zoom}
          onClick={handleMovement}
          options={{
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setmap(map)}
        >
          <Marker position={position} />
        </GoogleMap>
      </div>
    </div>
  );
}

export default Map;
