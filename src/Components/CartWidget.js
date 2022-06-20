import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
 
const Cart = ({value}) =>(
    <a href="carrito.html">{value}
    <ShoppingBasketIcon style={styles.container} color="action" sx={{ fontSize: 35 }}/>
    </a>
)

export default Cart

const styles = {
    container: {
        marginRight: 50
    }
}