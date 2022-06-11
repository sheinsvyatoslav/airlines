import Sidebar from './Sidebar';
import FlightsItemList from './FlightsItemList'

export default function Main(props) {
  
  return (
    <main className="content">
      <Sidebar flights={props.flights} setFlights={props.setFlights}/>
      <FlightsItemList flights={props.flights}/>
    </main>
  );
}
