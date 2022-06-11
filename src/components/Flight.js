import timeIcon from '../images/time-icon.png'
import calculateDuration from '../utils/calculateDuration'
import makeDate from '../utils/makeDate'

export default function Flight(props) {
  const noTransit = props.leg.segments.length === 1;
  const departureDate = makeDate(props.leg.segments[0].departureDate);
  const arrivalDate = makeDate(props.leg.segments[noTransit ? 0 : 1].arrivalDate);

  return (
    <div className="flight">
      <p className="flight__destination">
        {/* В некоторых объектах полета не хватает свойств departureCity и arrivalCity !!! */}
        {props.leg.segments[0].departureCity ? props.leg.segments[0].departureCity.caption : 'ЛОНДОН'}, {props.leg.segments[0].departureAirport.caption} 
        <span className="flight__code">({props.leg.segments[0].departureAirport.uid}) ⟶ </span>
        {props.leg.segments[noTransit ? 0 : 1].arrivalCity ? props.leg.segments[noTransit ? 0 : 1].arrivalCity.caption : 'МОСКВА'}, {props.leg.segments[noTransit ? 0 : 1].arrivalAirport.caption} 
        <span className="flight__code">({props.leg.segments[noTransit ? 0 : 1].arrivalAirport.uid})</span>
      </p>
      <div className="flight__time-info">
        <p className="flight__time">{departureDate.time} <span className="flight__date">{departureDate.date}</span></p>
        <div className="flight__duration-info">
          <img className="flight__time-icon" src={timeIcon} alt="Иконка часов"/>
          <p className="flight__duration">{calculateDuration(props.leg.duration)}</p>
        </div>
        <p className="flight__time"><span className="flight__date">{arrivalDate.date}</span> {arrivalDate.time}</p>
      </div>
      <div className={`${noTransit ? 'flight__line' : 'flight__transit'}`}>{!noTransit && '1 пересадка'}</div>
      <p className="flight__airline">Рейс выполняет: {props.leg.segments[0].airline.caption}</p>
    </div>
  );
}