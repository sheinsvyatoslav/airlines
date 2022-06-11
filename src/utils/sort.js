const sortPriceUp = flights => {
  return [...flights].sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)
}

const sortPriceDown = flights => {
  return [...flights].sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount)
}

const sortDuration = flights => {
  return [...flights].sort((a, b) => a.flight.legs.reduce((prev, curr) => prev.duration + curr.duration) - b.flight.legs.reduce((prev, curr) => prev.duration + curr.duration))
}

export {sortPriceUp, sortPriceDown, sortDuration}