import React, { lazy, Suspense } from "react";
import { Routes , Route, Outlet} from "react-router-dom";
import CabDashboard from "./cabdashboard";
const  CabList = lazy(()=> import('./cablist'));
const  CabEditFormik = lazy(()=> import('./cabedit-formik'));
const  CabEditRHF = lazy(()=> import('./cabedit-hook'));

const Home = () => {
  return (
    <>
          <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="" element={<CabDashboard />} /> 
            <Route path="list" element={<CabList />} /> 
             <Route path="/cab-edit-formik/:cabid" element={<CabEditFormik />} /> 
             <Route path="/cab-edit-react-hook-form/:cabid" element={<CabEditFormik />} /> 
            </Routes>     
          <Outlet /> 
        </Suspense>
    </>
  );
};

export default Home;