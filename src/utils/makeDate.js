import {dateRegex, timeRegex, months, days} from './constants'

export default function makeDate(fullDate) {
  const date = fullDate.match(dateRegex)[0];
  const myDate = new Date(date);

  return {date: `${myDate.getDate()} ${months[myDate.getMonth()]}. ${days[myDate.getDay()]}`, time: fullDate.match(timeRegex)[0]}
}