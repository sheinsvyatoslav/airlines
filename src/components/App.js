import React, { useState, useEffect } from 'react';
import Main from "./Main";
import {flightsInitial} from '../utils/flightsAll'

export default function App() {
  const [flights, setFlights] = useState(flightsInitial)

  useEffect(() => {
    localStorage.setItem('flights', JSON.stringify(flightsInitial))
  }, []);
  
  return (
    <Main flights={flights} setFlights={setFlights}/>
  );
}
