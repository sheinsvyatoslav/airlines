import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import FlightsItemList from './FlightsItemList'
import {flightsInitial} from '../utils/flightsAll'

export default function Main() {
  const [flights, setFlights] = useState(flightsInitial)

  useEffect(() => {
    localStorage.setItem('flights', JSON.stringify(flightsInitial))
  }, []);

  return (
    <main className="content">
      <Sidebar flights={flights} setFlights={setFlights}/>
      <FlightsItemList flights={flights}/>
    </main>
  );
}
