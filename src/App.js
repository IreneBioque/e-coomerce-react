import React, {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './styles/App.scss'
import TopMenu from './components/TopMenu';
import useFetch from './hooks/useFetch';
import Products from './components/Products';
import {urlApi} from './utils/constants'
import {STORAGE_PRODUCTS_CART} from './utils/constants'

function App() {
  // null porque las opciones no se las mandamos, solo la API
  const products = useFetch(urlApi, null);
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    getProductsCart();
  }, []);
// recuperar el carro cada vez q se recargue el navegador del ls
  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);

    if(idsProducts){
      // separar por comas
      const idsProductsSplit = idsProducts.split(',');
      setProductsCart(idsProductsSplit)
    } else {
      setProductsCart([]);
    }

  };

  const addProductCart = (id, name) => {
    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);
    // guardar estado en ls. Le pasamos el nombre que tendrá y el valor
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart );
    // para que el carrito se refresque cada vez que añadimos algo
    getProductsCart();
    toast.success(`${name} añadido al carrito correctamente`);
  }

  return (
    <div className="App">
      <TopMenu productsCart={productsCart} getProductsCart={getProductsCart} products={products} />
      <Products products={products} addProductCart={addProductCart} />
      <ToastContainer 
      position='bottom-left'
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange={false}
      draggable
      pauseOnHover={false}
      />
        
    </div>
  );
}

export default App;
