import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

const App = () => {
  let stock = 5;
  return (
    <>
    <NavBar />
    <ItemListContainer value='Mensaje Predeterminado' />
      </>
  
  );
}

export default App;
