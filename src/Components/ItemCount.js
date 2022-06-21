import React, { useState } from 'react'


export const ItemCount = ({stock, initial, onAdd}) =>{

    const [producto, setProducto] = useState(0);
    //let value = 1;

    const handlerClick = (evt) =>{
        setProducto(producto + 1);
       if (producto > 1 ){
        console.log('todavia kea')
       }if (producto <= 5){
        console.log('no hay')
       }
    }

    const minusClick = () =>{
        setProducto(producto - 1);
        if (producto <= 0){
            console.log('no hay más weas')
        
        }else{
        }
    }


    return(
        <>
        <p>{producto}</p>
        <button onClick={minusClick}>-</button>
        <button onClick={handlerClick}>+</button>
        <button>Agregar al carrito</button>
        </>
    )
}






