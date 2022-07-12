import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
//import AxiosExample from './Components/AxiosExample';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Cart from './Components/Cart'

const App = () => {
  let stock = 5;
  return (
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer value={'mensaje'}/>} />
      <Route path="/caregory/:categoryName" element={<ItemListContainer value={'mensaje'}/>} />
      <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
      
  
  );
}

export default App;
