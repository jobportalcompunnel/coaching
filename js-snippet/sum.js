var a = [3,4,5];

var sum = a.reduce((acc, curr) => {return acc + curr}, 3); // first way
a.reduce((acc, val)=> { acc = acc+val;return acc;} , 0) // second way
a.reduce((acc, val)=>  acc+val, 0)  //  thrid way
console.log(sum);
var dd = a.reduce( (acc, val, index)=> {
   return  {...acc, [index]: val}
}, {})
console.log(dd)
const numbers = [15.5, 2.3, 1.1, 4.7];
var jj = numbers.reduce(getSum, {});
function getSum(total, num) {
  return   {...total , [num] : Math.round(num)};
}
console.log(jj)
/// sum all value
var a = [3,4,5];
a.reduce((acc, val)=> { acc = acc+val;return acc;} , 0)
a.reduce((acc, val)=>  acc+val, 0)