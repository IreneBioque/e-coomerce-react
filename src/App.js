import React, {useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './styles/App.scss'
import TopMenu from './components/TopMenu';
import useFetch from './hooks/useFetch';
import Products from './components/Products';
import {urlApi} from './utils/constants'

function App() {
  // null porque las opciones no se las mandamos, solo la API
  const products = useFetch(urlApi, null);

  return (
    <div className="App">
      <TopMenu/>
      <Products products={products} />
    </div>
  );
}

export default App;
