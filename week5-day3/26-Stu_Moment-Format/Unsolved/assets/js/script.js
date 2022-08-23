// Use Moment.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate = moment("jul 28, 2022");
$("#1a").text(gradDate.format("MMM Do, YYYY"));

// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay = moment("1/1/2022", "D M YYYY").format("dddd");
$("#2a").text(weekDay);

// TODO: 3. Out of 365, what day of the year is today?
var now = moment();
$("#3a").text(now.format("DDD"));

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = moment();
$("#4a").text(time.format("h:mm:ss"));

// TODO: 5. What is the current Unix timestamp?
var unix = moment();
$("#5a").text(unix.format("X"));

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = moment(1318781876).format("DD MM YYYY");
$("#6a").text(unixFormat);
