Array.prototype.myUcase = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
var fruitsd = ["Banana", "Orange", "Apple", "Mango"];
fruitsd.myUcase();
fruitsd;

// another example
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.eyeColor = eye;
// }
// const myFather = new Person("John", "Doe", "blue");
// const myMother = new Person("Sally", "Rally", "green");
// Person.prototype.nationality = "English";
// "My mother is " + myMother.nationality;