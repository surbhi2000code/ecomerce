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
import AuthUser from "./AuthUser"

function App() {
  return (
    <>
     <Routes> 
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/deals" element={<Deals />} />
        <Route exact path="/cart" element={<AuthUser cmp={Cart }/>} />
        <Route exact path="/" element={<AuthUser cmp={Card} />} />
        <Route exact path="/details" element={<AuthUser cmp={Details} />} />
        <Route exact path="/placed" element={<AuthUser cmp={Confirm} />} />


      </Routes>
     
    </>
  );
}

export default App;
