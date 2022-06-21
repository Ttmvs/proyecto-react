import './App.css';
import NavBar from './Components/NavBar';
import Item from './Components/ItemListContainer';
import { ItemCount } from  './Components/ItemCount';

const App = () => {
  let stock = 5;
  return (
    <>
    <NavBar />
    <Item value='Mensaje Predeterminado' />
    <ItemCount stock={stock} />
    </>
  
  );
}

export default App;
