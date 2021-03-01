function calculateDayInYear(date) {
  let splitDate = date.split('/');
  let year = Number(splitDate[0]);
  let month = Number(splitDate[1]);
  let day = Number(splitDate[2]);
  let febDays = daysInFeb(year);
  let DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
    return calculateDayNumber(month, day);
  } else {
    console.log("Invalid date");
  }

  function validMonth(month) {
    return month && month >= 1 && month <= 12;
  }

  function validDay(month, day) {
    return day && day >= 1 && day <= DAYS_IN_MONTH[month - 1];
  }

  function calculateDayNumber(month, day) {
    let dayOfYear = 0;
    for (let i = 1; i < month; i++) {
      dayOfYear += DAYS_IN_MONTH[i - 1];
    }
    dayOfYear += day;
    return dayOfYear;
  }

  function daysInFeb(year) {
    if (isLeapYear(year) === true){
      return 29;
    } else {
      return 28;
    }
  }

  function isLeapYear(year) {
    if (isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4)){
      return true;
    }
  }

  function isMultiple(numerator, denominator) {
    return numerator % denominator === 0;
  }
}
// let date = process.argv[2];

// if (!date) {
//   console.log("Please provide a date in the format YYYY/MM/DD");
// } else {
//   calculateDayInYear(date);
// }

console.log("Tests:");
console.log("---------------");
console.log(calculateDayInYear("1900/3/2") === 61);
console.log(calculateDayInYear("2000/3/2") === 62);
console.log(calculateDayInYear("2012/2/29") === 60);
console.log(calculateDayInYear("2015/12/31") === 365);