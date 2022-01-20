import React, {useState} from "react";
import { Button } from "react-bootstrap";
import '../styles/Components/Cart.scss';
import {ReactComponent as CartEmpty} from '../images/cart-empty.svg';

export default function Cart() {
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
    return (
        <>
       <Button variant="link" className="cart" >
           <CartEmpty onClick={openCart}/>
       </Button>
       <div className="cart-content" style={{width: widthCartContent}} > Todos mis productos</div>
       </>
    );
}