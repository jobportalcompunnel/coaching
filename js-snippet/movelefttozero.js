var a11 = [0,0,7,8,3,2,3,5,6,8,0,0,0,5,6,7,9]; // sum 
var ff =[];
for(var index1=0; index1<a11.length; index1++ ){
    if(a11[index1]!==0){
        ff.push(a11[index1])
    }else{
        ff.splice(0,0,0);
    }
}
console.log(ff)

