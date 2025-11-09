import { useEffect } from "react";

const useTitleCount = (count : any) => {
  console.log("I am the first one");
  let www: any;
  useEffect(()=>{
    console.log("I am the second one");
    if(count >5){
      document.title = `Cris (${count})`;
    }else{
      document.title = `Cris`;
    }
    www= setTimeout(()=>{ alert(555)}, 10000)
  
    return ()=>{
      clearTimeout(www);
    }
  }, [count])
}

export default useTitleCount;
