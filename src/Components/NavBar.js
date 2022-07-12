import logo from '../img/logo.png'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom"

/* const NavBar = () =>{
    return(
        <header style={styles.container}>
        <img src={logo} alt="logo zara" style={styles.img}/>
        <nav>
            <a style={styles.navegation} href="poleras.html">Poleras</a>
            <a style={styles.navegation} href="abrigos.html">Abrigos</a>
            <a style={styles.navegation} href="accesorios.html">Accesorios</a>
            <a style={styles.navegation} href="zapatos.html">Zapatos</a>
        </nav>

        <CartWidget />
        </header>
    )
} */

const NavBar = () =>{
    const categories = [
        {name: "poleras", id: 0, route: "/category/poleras"},
        {name: "abrigos", id: 0, route: "/category/abrigos"},
        {name: "accesorios", id: 0, route: "/category/accesorios"},
        {name: "zapatos", id: 0, route: "/category/zapatos"},
        
    ];

    return (
        <header style={styles.container}>
            <div>
                <Link to={"/"}><img src={logo} alt="" style={styles.img}/></Link>

            </div>
            <div style={styles.container}>
                <nav >
                    {categories.map((category) => <Link key={category.id} to={category.route} style={styles.navegation}>{category.name}</Link>)}
                </nav>
                <Link to="/cart"><CartWidget/></Link>
                
            </div>
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
        fontFamily: 'Aleo , serif',

        
    },
}