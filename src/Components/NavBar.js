import logo from '../img/logo.png'
import Cart from './CartWidget'

const NavBar = () =>{
    return(
        <header style={styles.container}>
        <img src={logo} alt="logo zara" style={styles.img}/>
        <nav>
            <a style={styles.navegation} href="poleras.html">Poleras</a>
            <a style={styles.navegation} href="abrigos.html">Abrigos</a>
            <a style={styles.navegation} href="accesorios.html">Accesorios</a>
            <a style={styles.navegation} href="zapatos.html">Zapatos</a>
        </nav>
        <Cart />
        </header>
    )
}

export default NavBar

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    img: {
        width: 100,
        height: 50,
        margin: 50,
    },

    espaciado: {
        margin: 10,
    },

    navegation: {
        justifyContent: 'space-between',
        texteAlign: 'center',
        margin: 10,
        fontFamily: 'Aleo , serif'
    },
}