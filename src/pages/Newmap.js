import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles
import L from "leaflet";

// Custom Marker Icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// Component to handle click events on the map
function MapClickHandler({ setPosition }) {
  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      setPosition({ lat, lng });
    },
  });
  return null;
}

function Newmap() {
  const [position, setPosition] = useState({ lat: 28.70406, lng: 77.102493 });
  const [place, setPlace] = useState("");
  const [place1, setPlace1] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestions1, setSuggestions1] = useState([]); // Suggestions for second place
  const [loading, setLoading] = useState(false);
  const [position1, setPosition1] = useState(null); // For second place's position
  const [distance, setDistance] = useState(null); // To store calculated distance

  // Fetch location suggestions for place
  useEffect(() => {
    if (place.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
        );
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchSuggestions, 300); // Debounce API calls (wait 300ms)
    return () => clearTimeout(delay);
  }, [place]);

  // Fetch location suggestions for place1
  useEffect(() => {
    if (place1.length < 2) {
      setSuggestions1([]);
      return;
    }

    const fetchSuggestions1 = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${place1}`
        );
        const data = await response.json();
        setSuggestions1(data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchSuggestions1, 300); // Debounce API calls (wait 300ms)
    return () => clearTimeout(delay);
  }, [place1]);

  // Handle place selection and update positions
  const handleSelectPlace = (selectedPlace, isSecondPlace = false) => {
    const newPosition = {
      lat: parseFloat(selectedPlace.lat),
      lng: parseFloat(selectedPlace.lon),
    };
    if (isSecondPlace) {
      setPlace1(selectedPlace.display_name);
      setPosition1(newPosition); // Set position for second place
    } else {
      setPlace(selectedPlace.display_name);
      setPosition(newPosition); // Set position for first place
    }

    // If both places are selected, calculate the distance
    if (position && position1) {
      const dist = calculateDistance(position, position1);
      setDistance(dist);
    }

    setSuggestions([]); // Hide suggestions after selection
    setSuggestions1([]); // Hide suggestions for second place
  };

  // Function to calculate the distance between two points (in kilometers)
  const calculateDistance = (pos1, pos2) => {
    const lat1 = pos1.lat;
    const lon1 = pos1.lng;
    const lat2 = pos2.lat;
    const lon2 = pos2.lng;

    const R = 6371; // Earth's radius in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance.toFixed(2); // Return the distance rounded to 2 decimal places
  };

  return (
    <div>
      {/* Inputs for place 1 and place 2 */}
      <div style={{ position: "relative", width: "300px" }}>
        <input
          placeholder="Enter location..."
          value={place}
          type="text"
          onChange={(e) => setPlace(e.target.value)}
          style={{ width: "100%", padding: "8px", fontSize: "16px" }}
        />
        {loading && <p>Loading...</p>}

        {suggestions.length > 0 && (
          <ul
            style={{
              position: "absolute",
              width: "100%",
              background: "white",
              listStyle: "none",
              padding: "0",
              margin: "0",
              border: "1px solid #ccc",
              maxHeight: "150px",
              overflowY: "auto",
              zIndex: 1000,
            }}
          >
            {suggestions.map((sug) => (
              <li
                key={sug.place_id}
                onClick={() => handleSelectPlace(sug)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {sug.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ position: "relative", width: "300px" }}>
        <input
          placeholder="Enter location 2"
          value={place1}
          type="text"
          onChange={(e) => setPlace1(e.target.value)}
          style={{ width: "100%", padding: "8px", fontSize: "16px" }}
        />
        {loading && <p>Loading...</p>}

        {suggestions1.length > 0 && (
          <ul
            style={{
              position: "absolute",
              width: "100%",
              background: "white",
              listStyle: "none",
              padding: "0",
              margin: "0",
              border: "1px solid #ccc",
              maxHeight: "150px",
              overflowY: "auto",
              zIndex: 1000,
            }}
          >
            {suggestions1.map((sug) => (
              <li
                key={sug.place_id}
                onClick={() => handleSelectPlace(sug, true)} // Pass `true` for second place
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {sug.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Map */}
      <div>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "75vh", width: "75%" }}
          key={`${position.lat}-${position.lng}`}
        >
          <TileLayer
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapClickHandler setPosition={setPosition} />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <b>{place || "Selected Location 1"}</b> <br />
              Lat: {position.lat}, Lng: {position.lng}
            </Popup>
          </Marker>
          {position1 && (
            <Marker position={position1} icon={customIcon}>
              <Popup>
                <b>{place1 || "Selected Location 2"}</b> <br />
                Lat: {position1.lat}, Lng: {position1.lng}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

      {/* Distance Output */}
      {distance && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
            fontSize: "18px",
          }}
        >
          <strong>Distance between the two locations:</strong> {distance} km
        </div>
      )}
    </div>
  );
}

export default Newmap;
