import React, { useState } from 'react';
import FlightsItem from "./FlightsItem";
import {flightsNumber, extraFlights} from '../utils/constants'

export default function FlightsItemList(props) {
  const [count, setCount] = useState(flightsNumber);

  function handleCount() {
    setCount(count + extraFlights);
  }

  return (
      <section className="flights">
        {props.flights.map((item, i) => (
          
          <FlightsItem 
            flight={item.flight}
            key={i}
          />
        ))}
        {count < props.flights.length ?
          <div className="more">
            <button className="more__button" type='button' aria-label='Ещё' onClick={handleCount}>Показать ещё</button>
          </div>
          : ''}
      </section>
  );
}