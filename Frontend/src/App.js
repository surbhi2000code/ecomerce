import './App.css';
import { Route, Routes} from "react-router-dom";
import Login from './components/Admin/Login';
import Admin from './components/Admin/Admin';
import Category from './components/Admin/Category';
import { Products } from './components/Admin/Products';
import Deals from './components/Admin/Deals';
import Cart from './components/header/Cart';
import Card from './components/header/Card';
import Details from './components/header/Details'
import Confirm from './components/header/Confirm'
import Payment from './components/header/Payment'
import AuthUser from "./AuthUser"
import { useState } from 'react';

function App() {
 const [productdetail, setdetail] = useState("")
  const detail = (Id) => {
    setdetail(Id)
  } 
  return (
    <>
     <Routes> 
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/deals" element={<Deals />} />
        <Route exact path="/cart" element={<AuthUser cmp={Cart }/>} />
        <Route exact path="/payment" element={<AuthUser cmp={Payment }/>} />
        <Route exact path="/" element={<Card detail = {detail}  />} />
        <Route exact path="/details" element= {<Details productdetail={productdetail} />}/>
        <Route exact path="/placed" element={<AuthUser cmp={Confirm} />} />


      </Routes>
     
    </>
  );
}

export default App;
