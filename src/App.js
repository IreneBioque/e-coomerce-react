import React, {useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './styles/App.scss'
import TopMenu from './components/TopMenu';
import useFetch from './hooks/useFetch';
import {urlApi} from './utils/constants'

function App() {
  const result = useFetch(urlApi);
  console.log(result)

  return (
    <div className="App">
      <TopMenu/>
    </div>
  );
}

export default App;
