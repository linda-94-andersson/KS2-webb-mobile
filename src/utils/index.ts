export function roundDurationMinutes(
  hours: number,
  precision: MinutePrecision = 1
) {
  if (!hours || hours < 0) return 0;
  if (precision === 60) return Math.ceil(hours);
  const fullHours = Math.floor(hours);
  const hourFraction = hours - fullHours;
  const minutes = hourFraction * 60;
  if (!minutes) return hours;
  const roundedMinutes = Math.ceil(minutes / precision) * precision;
  return fullHours + roundedMinutes / 60;
}

export function getTotalDuration(timelogs: Timelog[], onlySeconds = true) {
  if (!timelogs.length) return 0;
  return timelogs.reduce((sum, { startTime, endTime }) => {
    if (!startTime || !endTime) return sum;
    const diff = endTime - startTime;
    return sum + (onlySeconds && diff ? Math.floor(diff / 1000) * 1000 : diff);
  }, 0);
}
