export default function calculateDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return (hours ? `${hours} ч ` : '') + (minutes ? `${minutes} мин` : '')
}