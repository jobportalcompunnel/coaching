import React, { lazy, Suspense, useEffect } from "react";
import { Routes , Route, Link, Outlet} from "react-router-dom";
const LazyList = lazy(() => import("./mongouserlist"));
const Userroute = ()=>{
    useEffect(()=>{
        alert(6)
    },[])

  return (
    <>
    <Link to="/mongo/userlist"> Mongo User </Link>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/userlist" element={<LazyList />} /> 
        </Routes>     
      <Outlet /> 
    </Suspense>
     </>
  )

}

export default Userroute;