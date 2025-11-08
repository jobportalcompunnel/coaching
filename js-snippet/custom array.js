class CustomArray extends Array {
  constructor(...args) {
    super(...args);
    //alert('Array has been called!');
for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
  }
}

let customArr = new CustomArray("a", "b", "c"); // Creating a custom array
console.log(customArr); // Output: [1, 2, 3]
customArr[0];

