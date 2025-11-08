function radio(x){
const myPromise11 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "King"+x);
});

myPromise11.finally(myDisplay("Settled"+x));
return myPromise11;
}


function myDisplay(x){
  console.log(x)
}

radio(3)