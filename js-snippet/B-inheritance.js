class B1 {
     //base_price =9;
     constructor(){
      this.base_price = 2;
     }
  }
  class A1 extends B1 {
    
    constructor(){
      super();
      this.parentThis = this;
      this.base_price = this.parentThis.base_price > 4?this.parentThis.base_price: 3  ;     
     }
    getPrice() {
      return this.base_price // Access own base_price
    }
  }
  
  const obj1 = new A1();
  const price = obj1.getPrice();
  price;
  