function counterPrime2(num){
    let isRound= Math.round(num);
    if(num <=3){if(num>1){return true}else{return false}}
    else if(num %2 ===0 || num %3 ===0 ){return false}
     else if(isRound> 5 && (num %5 ===0 || num %7 ===0 )){return false}
    return true;
  }
counterPrime2(25);
//// aonther way 
// function isPrime(number) {
//   // Handle non-positive and special cases
//   if (number <= 1) {
//     return false;
//   } else if (number <= 3) {
//     return true;
//   } else if (number % 2 === 0 || number % 3 === 0) {
//     return false;
//   }

//   // Efficiently check divisibility up to the square root of the number
//   let i = 5;
//   const limit = Math.sqrt(number); // Optimized limit calculation
//   while (i <= limit) {
//     if (number % i === 0 || number % (i + 2) === 0) {
//       return false;
//     }
//     i += 6; // Optimized increment to skip even multiples
//   }

//   return true;
// }

// // Example usage:
// const num = 11;
// if (isPrime(num)) {
//   console.log(num + " is a prime number");
// } else {
//   console.log(num + " is not a prime number");
// }