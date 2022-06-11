export default function findAirlines(flights) {
  const obj = {}

  for(let i = 0; i < flights.length; i++) {
    if(obj[flights[i].flight.carrier.caption]) {
      obj[flights[i].flight.carrier.caption] = Math.min(flights[i].flight.price.total.amount, obj[flights[i].flight.carrier.caption])
    } else {
      obj[flights[i].flight.carrier.caption] = flights[i].flight.price.total.amount;
    }
  }
  return obj;
}