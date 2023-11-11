import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import './Driver.css';

const Drive = () => {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [midPoint, setMidPoint] = useState(null);

  // Function to calculate midpoint
  const calculateMidpoint = (point1, point2) => {
    return {
      lat: (point1.lat + point2.lat) / 2,
      lng: (point1.lng + point2.lng) / 2
    };
  };

  // Fetch passengers based on the midpoint
  const fetchPassengers = () => {
    if (midPoint) {
      // API call logic here
      // Example: axios.get('/api/passengers', { params: { lat: midPoint.lat, lng: midPoint.lng } })
    }
  };

  useEffect(() => {
    if (startPoint && endPoint) {
      setMidPoint(calculateMidpoint(startPoint, endPoint));
    }
  }, [startPoint, endPoint]);

  const handleApiLoaded = (map, maps) => {
    map.addListener("click", (e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();

      // Set startPoint or endPoint based on user clicks
      if (!startPoint) {
        setStartPoint({ lat, lng });
      } else if (!endPoint) {
        setEndPoint({ lat, lng });
      }
    });
  };

  return (
    <div style={{ height: '55vw', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDpPN-iKLhciUkBuZNbTHCAxFUQgBkKg-s" }} // Replace with your Google Maps API key
        defaultCenter={{ lat: 37.34 , lng: -121.938130 }}
        defaultZoom={11}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {/* Render markers for startPoint and endPoint */}
        {startPoint && (
          <div lat={startPoint.lat} lng={startPoint.lng}>Start</div>
        )}
        {endPoint && (
          <div lat={endPoint.lat} lng={endPoint.lng}>End</div>
        )}
      </GoogleMapReact>
      <button onClick={fetchPassengers}>Next</button>
    </div>
  );
};

export default Drive;
