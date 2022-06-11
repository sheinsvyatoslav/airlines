import Flight from '../components/Flight'
import airlineLogo from '../images/logo.png'

export default function FlightsItem(props) {
  return (
    <div className="flight-item">
      <div className="flight-item__header">
        <img className="flight-item__logo" src={airlineLogo} alt="Логотип авиалинии"/>
        <div className="flight-item__info">
          <p className="flight-item__price">{props.flight.price.total.amount} ₽</p>
          <p className="flight-item__passenger">Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      {props.flight.legs.map((leg, i) => (
        <Flight 
          leg={leg}
          key={i}
        />
      ))}
      <button className="flight-item__button" type="button">ВЫБРАТЬ</button>
    </div>
  );
}