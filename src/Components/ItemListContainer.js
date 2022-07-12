import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount"
import Ropa from "../data/index"
import ItemList from "./itemList";
import { useParams } from "react-router-dom";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(Ropa);
    }, 2000);
  });

export default function ItemListContainer({value}) {

  const {categoryName} = useParams();

    const [listaRopa, setListaRopa] = useState([]);
    const [loading, setLoading] = useState(false);

    const onAdd = () =>{
        alert('Gracias por comprar')
    }

    useEffect(() => {
        setLoading(true);
        promesa.then((response) => {
          setListaRopa(response);
          setLoading(false);
        });
      }, [categoryName]);
    
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


