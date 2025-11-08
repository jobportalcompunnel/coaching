// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Queen");
});

//Both resolve, who is faster? race any
Promise.all([myPromise1, myPromise2]).then((x) => {
  console.log(x);
});
//debouncee
// function  debouncee(y, delay){
// const myPromise1y = new Promise((resolve, reject) => {
//   setTimeout(resolve, delay, y);
// });
//     return myPromise1y;
// }
// debouncee("rajat",3000).then((x) => {
//   console.log(x );
// });
//remove double occurance value
// yy = [1,2,3,4,4,5];
// yy.filter((item, index) => yy.indexOf(item) === yy.lastIndexOf(item))
