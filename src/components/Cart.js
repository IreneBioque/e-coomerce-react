import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import '../styles/Components/Cart.scss';
import {ReactComponent as CartEmpty} from '../images/cart-empty.svg';
import {ReactComponent as CartFull} from '../images/cart-full.svg';
import {ReactComponent as Close} from '../images/close.svg';
import {ReactComponent as Garbage} from '../images/garbage.svg';
import {STORAGE_PRODUCTS_CART } from '../utils/constants'
import {countDuplicatesItemArray, removeArrayDuplicates, removeItemArray} from '../utils/arrayFunc'




export default function Cart(props) {
    const {productsCart, getProductsCart, products} = props;
  
    const [cartOPen, setCartOpen] = useState(false);
    const [singleProductsCart, setSingleProductsCart]= useState([]);
    const [cartTotalPrice, setCartTotalPrice ] = useState(0);
    // si está abierto el ancho es 400 y si no 0
    const widthCartContent = cartOPen ? 400 : 0;
    useEffect(() => {
      // para que devuelva los productos únicos que hay en el carrito
        const allProductsId = removeArrayDuplicates(productsCart);
        setSingleProductsCart(allProductsId)
  // variables que cuando se actualicen este effect se vuelva a ejecutar
    },[productsCart])

    useEffect(() => {
      const productData = []
      let totalPrice = 0;
      // para que devuelva los productos únicos que hay en el carrito
      const allProductsId = removeArrayDuplicates(productsCart)
      allProductsId.forEach(productId => {
      const quantity = countDuplicatesItemArray(productId, productsCart);
       // objeto que tiene el id del producto y la cantidad del producto
      const productValue = {
        id: productId,
        quantity: quantity
      };
      productData.push(productValue)
      });
      // si loading ha terminado y result tiene contenido
      if (!products.loading && products.result) {
        products.result.forEach(product => {
          productData.forEach(item =>{
            if(product.id == item.id){
              const totalValue = product.price * item.quantity;
              totalPrice = totalPrice + totalValue
            }
          })
        })
      }
      setCartTotalPrice(totalPrice);
      // cuando estas variables se actualicen, el useEffect vuelve a pasar
  },[productsCart, products])

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

    const increaseQuantity = id => {
      const arrayItemsCart = productsCart;
      arrayItemsCart.push(id);
      localStorage.setItem(STORAGE_PRODUCTS_CART, arrayItemsCart);
      getProductsCart();
    };
  
    const decreaseQuantity = id => {
      const arrayItemsCart = productsCart;
      const result = removeItemArray(arrayItemsCart, id.toString());
      localStorage.setItem(STORAGE_PRODUCTS_CART, result);
      getProductsCart();
    };
  
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
       <div className="cart-content__products"  >
       {singleProductsCart.map((idProductCart, i) => {
           return (
            <CartContentProducts 
            key={i} products={products} 
            idProductCart={idProductCart} 
            idsProductsCart={productsCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity} />
           )
       })}
       <CartContentFooter cartTotalPrice={cartTotalPrice}/>
       </div>
   
 
       </div>
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

function CartContentProducts(props) {
    const {
      products: { loading, result },
      idsProductsCart,
      idProductCart,
    } = props;

    if (!loading && result) {
      return result.map((product, index) => {
        if (idProductCart == product.id) {
          const quantity = countDuplicatesItemArray(product.id, idsProductsCart);
          return (
            <RenderProduct
              key={index}
              product={product}
              quantity={quantity}
              increaseQuantity={props.increaseQuantity}
              decreaseQuantity={props.decreaseQuantity}
            />
          );
        }
      });
    }
    return null;
  }

  function RenderProduct (props){
    const { product, quantity} = props;
   
    return (
      <div className="cart-content__product">
        <img src={product.image} alt={product.name} />
        <div className="cart-content__product-info">
          <div>
            <h3>{product.name.substr(0, 25)}...</h3>
            <p>{product.price.toFixed(2)} € / ud.</p>
          </div>
          <div>
            <p>En carro: {quantity} ud.</p>
            <div>
              {/* No se puede hacer destructuring en funciones?*/}
            <button onClick={() => props.increaseQuantity(product.id)}>+</button>
            <button onClick={() => props.decreaseQuantity(product.id)}>-</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  function CartContentFooter (props){
    const { cartTotalPrice} = props;
   
    return (
      <div className="cart-content__footer">
        <div>
          <p>Total aproximado: </p>
         <p>{cartTotalPrice.toFixed(2)} €</p>
        </div>
        <Button>Tramitar pedido</Button>
      </div>
    );
  };