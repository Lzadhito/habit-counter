export const OCCURENCE = {
  DAILY: 1,
  EVERY_TWO_DAYS: 2,
  WEEKLY: 7,
  BIWEEKLY: 14,
  CUSTOM: -1,
};

export const OCCURENCE_VALUES_TO_KEY = {};
Object.keys(OCCURENCE).forEach((key) => (OCCURENCE_VALUES_TO_KEY[OCCURENCE[key]] = key));

export const DEFAULT_NEW_HABIT_VALUES = {
  newHabit: '',
  isBadHabit: false,
  occurence: OCCURENCE.DAILY,
  customOccurence: undefined,
};
