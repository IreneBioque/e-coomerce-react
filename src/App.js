import logo from './logo.svg';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';

function App() {
  const openToast = () => {
    toast('Wow so easy')
  }
  return (
    <div className="App">
      <button onClick={openToast} >Click</button>
      <ToastContainer />
    </div>
  );
}

export default App;
