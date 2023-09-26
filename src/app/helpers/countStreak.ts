import { intervalToDuration } from 'date-fns';

export default function countStreak(dates: string[]) {
  let count = 0;
  for (let i = 0; i < dates.length; i++) {
    if (i === 0) continue;

    const curr = dates[i];
    const { days } = intervalToDuration({
      start: new Date(curr),
      end: new Date(dates[i - 1]),
    });
    if (days === 1) count++;
    else break;
  }
  return count;
}
