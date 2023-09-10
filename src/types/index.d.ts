interface Habit {
  id: string;
  name: string;
  count: HabitCount[];
}

interface HabitCount {
  id: string;
  date: string;
}
