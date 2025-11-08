var fisrtArg  = "cb";
var secondArg = "  rcccbbbb";
//var secondArg = "acf ccbb ccccb rcg cb hhhcb cba cccbbbb   rcccbbbb";
 const fset = [...fisrtArg]
 const sset = [...(secondArg).split(" ")]
flag= 0;
    for(let sitem of sset){
        let unititem = [...sitem];
        let internalFlag=1;
        if(!unititem.every(item => fset.includes(item))){
           internalFlag=0;
        }
        if(unititem?.length && internalFlag){
           flag++;
        }
    }
flag;