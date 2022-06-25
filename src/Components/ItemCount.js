import React, {useState} from "react";


const ItemCount = ({ stock, initial, onAdd}) =>{
    const [Producto, setProducto] = useState(initial)

    const sumar = () =>{
    Producto < stock && setProducto(Producto + 1)
    Producto >= stock && alert('No hay suficiente stock del producto')
}

    const restar = () =>{
       setProducto(Math.max(Producto - 1, 0))
        
    }


    return(
        <>
        <div style={styles.container}>
            <button style={styles.btnMinus} onClick={restar}>-</button>
            <p style={styles.value}>{Producto}</p>
            <button style={styles.BtnPlus} onClick={sumar}>+</button>
        </div>
        <button style={styles.shop} onClick={onAdd}>Shop</button>
        </>
    )
}

export default ItemCount


const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },

    shop:{
        margin: 30,
        width: 200,
    },
    BtnPlus: {
        marginTop: 100,
        marginLeft: 50,
    },
    btnMinus:{
        marginTop: 100,
        marginLeft: 50,
    },
    value:{
        marginTop: 100,
        marginLeft: 50,
        fontSize: 20
        
    }
}




