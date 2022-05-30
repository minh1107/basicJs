var date = new Date();

console.log(typeof date);
var month = date.getMonth() + 1 // month
var year = date.getFullYear() // year
var hours = date.getHours() // hours
var day = date.getDate ()
var minutes = date.getMinutes() // minutes
var seconds = date.getSeconds() // seconds
console.log(month);
console.log(year);
console.log(hours);
console.log(day);
console.log(`this is ${hours}h - ${minutes}m - ${seconds}s and ${day}/${month}/${year}`);
