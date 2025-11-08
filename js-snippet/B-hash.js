class Parent1 {
     #mobile= "1112"

     sum = 4+(+this.#mobile);
}

class Child1 extends Parent1 {
  

getMobile(){
   return this.mobile; 
}
}

// const child1 = new Child1();
// child1.getMobile();
new Parent1().sum;
