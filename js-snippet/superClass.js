function createGreeter1() {
  counter = 0;
  function greet(x) {
    if (arguments[0]) {
      counter = 0;
      counter += x;
      function greet1(x) {
        counter += x;
        function greet2(x) {
          counter += x;
          console.log("Total, " + counter + "!");
        }
        return greet2;
      }
      return greet1;
    } else {
      return counter;
    }
  }
  return greet;
}

const remo12 = new createGreeter1();
const resulClusure = remo12(1)(2)(3); //Total, 6!
remo12(); // 6
