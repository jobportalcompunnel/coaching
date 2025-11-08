const myf2 = new Promise((res,err )=>{
  let sum = 20;
if(sum >10){
  res(sum)
}else{
    err("error hain bhai")
}

})

myf2.then((res,err)=>{
if(res){
  console.log(res, "www")
}else{
console.log(err)
}
})