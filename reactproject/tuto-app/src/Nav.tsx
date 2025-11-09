import { Routes, Route, Outlet } from "react-router-dom";
import Product from "./product/Product";
import ProductReducer from "./product/ProductReducer";
import ProductForward from "./product/ProductForward";
import ProductLazy from "./product/ProductLazy";
import ProductMemo from "./product/ProductMemo";
import ProductUseMemo from "./product/ProductUseMemo";
import UserLogin from "./login/UserLogin";
import StateLogin from "./login/stateLogin";
import MainContext from "./package/contextApi/mainContext";
import MainChat from "./package/contextChat/mainchat";
import ExampleComponent from "./package/storechat/example1";
import StoreUser from "./package/storechat/store-user";
import { lazy, Suspense } from "react";
const LazyUserroute = lazy(() => import("./components/userroute"));
const LazyCabroute = lazy(() => import("./components/cabbook/Home"));
const Nav = () => {
  return (
    <div>
       <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route  path="/product" element={<Product />} />
        <Route  path="/product/:id" element={<Product />} />
        <Route  path="/reducer" element={<ProductReducer />} />
        <Route  path="/lazy" element={<ProductLazy />} />
        <Route  path="/memo" element={<ProductMemo />} />
        <Route  path="/usememo" element={<ProductUseMemo />} />
        <Route  path="/login" element={<UserLogin />} />
        <Route  path="/statelogin" element={<StateLogin />} />
        <Route  path="/loggedinuser" element={<MainContext />} />
        <Route  path="/MainChat" element={<MainChat />} />
        <Route  path="/ExampleComponent" element={<ExampleComponent />} />
        <Route  path="/StoreUser" element={<StoreUser />} />
        <Route  path="/mongo/*" element={<LazyUserroute />} />   
        <Route  path="/cab/*" element={<LazyCabroute />} />        
      </Routes>
      </Suspense>
    </div>
  );
};
export default Nav;