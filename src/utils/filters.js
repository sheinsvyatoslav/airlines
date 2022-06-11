const filterNoTransit = item => item.flight.legs.every(leg => leg.segments.length === 1);
const filterTransit = item => item.flight.legs.some(leg => leg.segments.length > 1);
const filterPriceFrom = (item, value) => item.flight.price.total.amount >= value;
const filterPriceTo = (item, value)=> item.flight.price.total.amount <= value;

export {filterNoTransit, filterTransit, filterPriceFrom, filterPriceTo}