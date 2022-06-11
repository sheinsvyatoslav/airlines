const dateRegex = /.+(?=T)/;
const timeRegex = /(?<=T)\d+:\d+/;
const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const flightsNumber = 5;
const extraFlights = 5;

export {dateRegex, timeRegex, months, days, flightsNumber, extraFlights}