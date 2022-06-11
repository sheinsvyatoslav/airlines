import React, { useState, useEffect } from 'react';
import {sortPriceUp, sortPriceDown, sortDuration} from '../utils/sort';
import {flightsInitial} from '../utils/flightsAll'
import CheckboxAirline from "./CheckboxAirline";
import findAirlines from '../utils/findAirlines';
import {filterNoTransit, filterTransit, filterPriceFrom, filterPriceTo} from '../utils/filters'

export default function Sidebar(props) {
  const allAirlines = findAirlines(flightsInitial);
  const [checkedTransit, setCheckedTransit] = useState(false);
  const [checkedNoTransit, setCheckedNoTransit] = useState(false);
  const [values, setValues] = useState({});
  const filtered = JSON.parse(localStorage.getItem('flights')).filter(item => (
    (!checkedNoTransit || filterNoTransit(item)) && 
    (!checkedTransit || filterTransit(item)) &&
    (!values.pricefrom || filterPriceFrom(item, values.pricefrom)) &&
    (!values.priceto || filterPriceTo(item, values.priceto)) 
  ))
  const [checkedStateAirlines, setCheckedStateAirlines] = useState(
    new Array(Object.keys(findAirlines(filtered)).length).fill(false)
  );
  //отмеченные авиалинии
  const checked = checkedStateAirlines.map((item, i) => (item) && Object.keys(findAirlines(filtered))[i]).filter(item => item);

  //сортировка
  const objSort = {
    priceup: flights => sortPriceUp(flights),
    pricedown: flights => sortPriceDown(flights),
    duration: flights => sortDuration(flights),
  }

  const handleOnChangeSort = (e) => {
    const value = e.target.value;
    props.setFlights(objSort[value](props.flights));
    localStorage.setItem('flights', JSON.stringify(objSort[value](flightsInitial)))
  };

  //цены
  function handleOnChangePrice(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: Number(value)});
  }

  //авиалинии
  function handleOnChangeAirlines(pos) {
    const updatedCheckedState = checkedStateAirlines.map((item, index) =>
      index === pos ? !item : item
    );

    setCheckedStateAirlines(updatedCheckedState);
  }

  //пересадки
  function handleOnChangeTransit(e) {
    setCheckedTransit(!checkedTransit);
  }

  function handleOnChangeNoTransit(e) {
    setCheckedNoTransit(!checkedNoTransit);
  }

  //фильтруем все
  const filteredFlights = JSON.parse(localStorage.getItem('flights')).filter(item => (
    (!checkedNoTransit || filterNoTransit(item)) && 
    (!checkedTransit || filterTransit(item)) &&
    (!values.pricefrom || filterPriceFrom(item, values.pricefrom)) &&
    (!values.priceto || filterPriceTo(item, values.priceto)) &&
    (checkedStateAirlines.every(item => item === false) || checked.includes(item.flight.carrier.caption))
  ))

  useEffect(() => {
    props.setFlights(filteredFlights);
  }, [checkedTransit, checkedNoTransit, values.pricefrom, values.priceto, checkedStateAirlines]);

  return (
    <section className="sidebar">
      <form>
        <fieldset className="sidebar__fieldset sidebar__fieldset_type_sort">
          <legend className="sidebar__fieldset-name">Сортировать</legend>
          <label className="sidebar__label"><input type="radio" id="priceup" name="sort" value="priceup" onChange={handleOnChangeSort}/> - по возрастанию цены</label>
          <label className="sidebar__label"><input type="radio" id="pricedown" name="sort" value="pricedown" onChange={handleOnChangeSort}/> - по убыванию цены</label>
          <label className="sidebar__label"><input type="radio" id="duration" name="sort" value="duration" onChange={handleOnChangeSort}/> - по времени в пути</label>
        </fieldset>
        <fieldset className="sidebar__fieldset sidebar__fieldset_type_filter">
          <legend className="sidebar__fieldset-name">Фильтровать</legend>
          <label className="sidebar__label"><input type="checkbox" id="transit" name="transit" onChange={handleOnChangeTransit} checked={checkedTransit}/> - 1 пересадка</label>
          <label className="sidebar__label"><input type="checkbox" id="notransit" name="notransit" onChange={handleOnChangeNoTransit} checked={checkedNoTransit}/> - без пересадок</label>
        </fieldset>
        <fieldset className="sidebar__fieldset sidebar__fieldset_type_price">
          <legend className="sidebar__fieldset-name">Цена</legend>
          <label className="sidebar__label sidebar__label_type_price">От
            <input className="sidebar__input" type="text" value={values.pricefrom || ''} id="pricefrom" name="pricefrom" onChange={handleOnChangePrice} />
          </label>
          <label className="sidebar__label sidebar__label_type_price">До
            <input className="sidebar__input" type="text" value={values.priceto || ''} id="priceto" name="priceto" onChange={handleOnChangePrice} />
          </label>
        </fieldset>
        <fieldset className="sidebar__fieldset">
          <legend className="sidebar__fieldset-name">Авиакомпании</legend>
          {
          Object.keys(findAirlines(filtered)).map((airline, i) => (
            <CheckboxAirline airline={airline} price={allAirlines[airline]} key={i} onChange={() => handleOnChangeAirlines(i)} checked={checkedStateAirlines[i]}/>
          ))
          }
        </fieldset>
      </form>
    </section>
  )
}