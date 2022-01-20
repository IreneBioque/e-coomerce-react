import React, {useState} from "react";
import { Button } from "react-bootstrap";
import '../styles/Components/Cart.scss';
import {ReactComponent as CartEmpty} from '../images/cart-empty.svg';
import {ReactComponent as CartFull} from '../images/cart-full.svg';
import {ReactComponent as Close} from '../images/close.svg';
import {ReactComponent as Garbage} from '../images/garbage.svg';
import {STORAGE_PRODUCTS_CART } from '../utils/constants'

export default function Cart(props) {
    const {productsCart, getProductsCart} = props;

    const [cartOPen, setCartOpen] = useState(false);
    // si está abierto el ancho es 400 y si no 0
    const widthCartContent = cartOPen ? 400 : 0;

    
    const openCart = () => {
        setCartOpen(true);
        // Si esta en el carrito, no puede hacer scroll en  la web
        document.body.style.overflow = 'hidden';
    }

    const closeCart = () => {
        setCartOpen(false);
        document.body.style.overflow='scroll';
    }

    const emptyCart = () => {
        localStorage.removeItem(STORAGE_PRODUCTS_CART);
        getProductsCart();
    }
    return (
        <>
       <Button variant="link" className="cart" >
           {productsCart.length > 0 ? (
                 <CartFull onClick={openCart}/>
           ) : (
               <CartEmpty onClick={openCart}/>
           )}
       </Button>
       <div className="cart-content" style={{width: widthCartContent}} > 
       <CartContentHeader closeCart={closeCart} emptyCart={emptyCart} />
       Todos mis productos</div>
       </>
    );
}

function CartContentHeader (props){
    const {closeCart, emptyCart} = props;

    return (
        <div className="cart-content__header">
            <div>
                <Close onClick={closeCart}/>
                <h2>Carrito</h2>
            </div>
            <Button variant="link" onClick={emptyCart} >
                Vaciar
                <Garbage/>
            </Button>
        </div>
    )
}