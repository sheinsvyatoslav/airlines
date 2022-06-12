import React, { useState } from 'react';
import Main from "./Main";
import {flightsInitial} from '../utils/flightsAll'

export default function App() {
  const [flights, setFlights] = useState(flightsInitial);

  window.onbeforeunload = (e) => {
    e.preventDefault();
    localStorage.setItem('flights', JSON.stringify(flightsInitial))
  };
  
  return (
    <Main flights={flights} setFlights={setFlights}/>
  );
}
