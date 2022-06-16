const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of month: ${now.getDate()}`);
// console.log(``);

const date1 = new Date("March 1 2100 12:00:00");
const date2 = new Date();

const date1Timestamp = date1.getTime();
const date2Timestamp = date2.getTime();

if (date1Timestamp < date2Timestamp) {
  console.log(date1.toString());
} else {
  console.log(date2.toString());
}
