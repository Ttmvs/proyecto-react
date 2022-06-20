import './App.css';
import NavBar from './Components/NavBar';
import Item from './Components/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar />
    <Item value='Mensaje Predeterminado' />
    </>
  
  );
}

export default App;
