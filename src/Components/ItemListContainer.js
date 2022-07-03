import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount"
import Ropa from "../data"
import ItemList from "./itemList";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(Ropa);
    }, 2000);
  });

/* const ItemListContainer = ({value}) =>{

    const onAdd = () =>{
        alert('Gracias por comprar')
    }

    return(
        <>
    <p style={styles.container}>{value}</p>
    <ItemCount initial={0} stock={5} onAdd={onAdd} />
    </>
    )
} */


export default function ItemListContainer({value}) {
    const [listaRopa, setListaRopa] = useState([]);
    const [loading, setLoading] = useState(false);

    const onAdd = () =>{
        alert('Gracias por comprar')
    }

    useEffect(() => {
        setLoading(true);
        promesa.then((response) => {
          setLoading(false);
          setListaRopa(response);
        });
      }, []);
    
      if (loading) {
        return (
          <>
            <h1>Cargando...</h1>
          </>
        );
      }

    return(
        <>
    <p style={styles.container}>{value}</p>
    <ItemCount initial={0} stock={5} onAdd={onAdd} />
    <ItemList Ropa={listaRopa} />
    </>
    )
}  

const styles = { 
    container: {
        marginLeft: '3%',
        fontFamily: 'Aleo , serif'
    }
}

