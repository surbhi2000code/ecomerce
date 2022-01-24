import './App.css';
import Admin from './components/Admin/Admin';
import { Route, Routes} from "react-router-dom";
import Header from './components/header/Header';
import Category from './components/Admin/Category';
import { Products } from './components/Admin/Products';
function App() {
  return (
    <>
     <Routes> 
     <Route exact path="/" element={<Header />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/products" element={<Products />} />

      </Routes>
     
    </>
  );
}

export default App;