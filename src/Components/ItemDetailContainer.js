import React, {useState, useEffect} from "react";
import ProductOne from "../data/app"
import ItemDetail from "./ItemDetail"

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(ProductOne);
    }, 2000);
  });


const ItemDetailContainer = ({value}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        promesa.then((response) => {
          setProduct(response);
          setLoading(false);
        });
      }, []);
    
      if (loading) {
        return (
          <>
            <h1>Waiting...</h1>
          </>
        );
      }

return(
    <>
    <ItemDetail ProductOne={product}/>
    </>
    )
}
export default ItemDetailContainer