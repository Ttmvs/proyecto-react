import logo from '../img/logo.png'
import bolsa from '../img/bolsacompra.png'

const NavBar = () =>{
    return(
        <header style={styles.container}>
        <img src={logo} alt="logo zara" style={styles.img}/>
        <nav>
            <a style={styles.navegation} href="">Poleras</a>
            <a style={styles.navegation} href="">Abrigos</a>
            <a style={styles.navegation} href="">Accesorio</a>
            <a style={styles.navegation} href="">Zapatos</a>
        </nav>
        <a href=""><img src={bolsa} alt="logo zara"  style={styles.img}/></a>
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
        margin: 10
    }
}