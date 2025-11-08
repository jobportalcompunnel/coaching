
  function calculator3(){
    ware1 =10;
    sum = (x)=>{
      this.ware1 +=x;
      return this;
    }
    multiply = (x)=>{
      this.ware1 *=x;
      return this.ware1;
    }
    return this;
  }

  calculator3().sum(2).multiply(5);
