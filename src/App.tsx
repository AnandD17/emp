import React from 'react';
import './App.css';
import Router from './Router/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer 
        autoClose={2000}
        hideProgressBar={true}
        />
      <Router/>
    </div>
  );
}

export default App;
