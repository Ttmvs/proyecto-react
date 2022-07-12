import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
 
const Cart = ({value}) =>(
    <a href="carrito.html">{value}
    <ShoppingBasketIcon color="action" sx={{ fontSize: 35 }}/>
    </a>
)

export default Cart

const styles = {
    container: {
        marginRight: 50
    }
}