const ages = [32, 33, 16, 40];

ages.every(checkAge)

function checkAge(age) {
  return age > 33;
}
// AT
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = 2;
let fruit = fruits.at(index);
// of
let fruitsss = Array.of("Banana", "Orange", "Apple", "Mango");
//some
const agesww = [3, 10, 18, 20];

ffs =agesww.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
ffs;
//
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");