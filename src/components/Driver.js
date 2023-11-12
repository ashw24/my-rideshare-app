import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Driver.css';

const Drive = () => {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [midPoint, setMidPoint] = useState(null);
  const [settingStart, setSettingStart] = useState(true); // New state to toggle between start and end points

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
    }
  };

  useEffect(() => {
    if (startPoint && endPoint) {
      setMidPoint(calculateMidpoint(startPoint, endPoint));
    }
  }, [startPoint, endPoint]);

  const handleApiLoaded = (map, maps) => {
    let isSettingStart = true; // Local variable to toggle between start and end
  
    map.addListener("click", (e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      console.log("Map clicked at: ", lat, lng); // Debugging
  
      if (isSettingStart) {
        console.log("Setting start point");
        setStartPoint({ lat, lng });
      } else {
        console.log("Setting end point");
        setEndPoint({ lat, lng });
      }
  
      // Toggle the variable for the next click
      isSettingStart = !isSettingStart;
      setSettingStart(isSettingStart); // Update state as well, if needed elsewhere
    });
  };

  const Marker = ({ text }) => <div className="marker">{text}</div>;
  

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDpPN-iKLhciUkBuZNbTHCAxFUQgBkKg-s" }} // Replace with your Google Maps API key
        defaultCenter={{ lat: 37.34, lng: -121.938130 }}
        defaultZoom={16}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {startPoint && (
          <div lat={startPoint.lat} lng={startPoint.lng}>Start</div>
        )}
        {endPoint && (
          <div lat={endPoint.lat} lng={endPoint.lng}>End</div>
        )}
        {startPoint && <Marker lat={startPoint.lat} lng={startPoint.lng} text="Start" />}
        {endPoint && <Marker lat={endPoint.lat} lng={endPoint.lng} text="End" />}
      </GoogleMapReact>
      <button className="next-button" onClick={fetchPassengers}>
        Next <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Drive;
