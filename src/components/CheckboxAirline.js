export default function CheckboxAirline(props) {
  
  return (
    <div className="sidebar__label-container">
      <label className="sidebar__label sidebar__label_type_airline">
          <input type="checkbox" name={props.airline} onChange={props.onChange} value={props.airline} checked={props.checked}/> - {props.airline}
      </label>
      <p className="sidebar__price">от {props.price} р.</p>
    </div>
  );
}