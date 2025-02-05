/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  MON = "monday",
  TUE = "tuesday",
  WED = "wednesday",
  THU = "thursday",
  FRI = "friday",
  SAT = "saturday",
  SUN = "sunday",
}

enum WeekEnds {
  SAT = "saturday",
  SUN = "sunday",
}

const isWeekend = (day: Days): boolean => {
 return day === Days.SAT || day === Days.SUN;
};

console.log(isWeekend(Days.SUN))
