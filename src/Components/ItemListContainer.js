import React from "react"
import ItemCount from "./ItemCount"

const ItemListContainer = ({value}) =>{

    const onAdd = () =>{
        alert('Gracias por comprar')
    }

    return(
        <>
    <p style={styles.container}>{value}</p>
    <ItemCount initial={0} stock={5} onAdd={onAdd} />
    </>
    )
}


export default ItemListContainer

const styles = { 
    container: {
        marginLeft: '3%',
        fontFamily: 'Aleo , serif'
    }
}

