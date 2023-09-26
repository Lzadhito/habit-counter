interface Habit {
  id: number;
  name: string;
  done_dates: string[];
  is_bad_habit?: boolean;
  occurrence: number;
}
