import { OCCURENCE } from './components/constants';

export const DUMMY_HABIT_LIST: Habit[] = [
  {
    name: 'Minum Air Putih 2L',
    dates: [
      '2023-09-01T22:57:57.374Z',
      '2023-09-16T22:57:57.374Z',
      '2023-09-21T22:57:57.374Z',
      '2023-09-27T22:57:57.374Z',
      '2023-09-30T22:57:57.374Z',
    ],
    occurence: OCCURENCE.DAILY,
  },
  {
    name: 'Tidak beli parfum',
    dates: [
      '2023-09-11T22:57:57.374Z',
      '2023-09-13T22:57:57.374Z',
      '2023-09-17T22:57:57.374Z',
      '2023-09-27T22:57:57.374Z',
      '2023-09-28T22:57:57.374Z',
      '2023-09-29T22:57:57.374Z',
    ],
    isBadHabit: true,
    occurence: OCCURENCE.EVERY_TWO_DAYS,
  },
];
