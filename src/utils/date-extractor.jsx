
export { extractDate, extractDateAsObject };

function extractDate(date) {
  if (typeof date === 'string') {
    const rawDate = date.substring(0, date.indexOf("T"));
    const dateObject = extractDateAsObject(rawDate);
    return dateObject;
  }
  else {
    return "";
  }
}

function extractDateAsObject(date) {
  const yearInt = parseInt(date.substring(0, date.indexOf("-")));

  var newDate = date.substring(date.indexOf("-") + 1, date.length);
  const monthInt = parseInt(newDate.substring(0, newDate.indexOf("-")));

  newDate = newDate.substring(newDate.indexOf("-") + 1, newDate.length);
  const dayInt = parseInt(newDate);

  const monthString = getMonthFromInt(monthInt);
  var dateObject = {
    year: yearInt,
    month: monthString,
    day: dayInt
  };
  return dateObject;
}

function getMonthFromInt(month) {

  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "NaN";
  }
}