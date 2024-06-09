import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router , Routes} from 'react-router-dom';
import Header from './components/header/Header';
import Collect from './components/collection/Collect';
import Comb from './components/header/Comb';
import Product from './components/product/Product';
import Checkout from './components/checkout/Checkout';
import Success from './components/success/Success';
import Login from './components/login/Login';
import Signup from './components/login/Signup';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
      <Routes>
        <Route path='' element={<App/>}>
          <Route path='' element={<Comb/>}/>
          <Route path='product/:id' element={<Product/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='success' element={<Success/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='collect' element={<Collect/>}/>
        </Route>
      </Routes>
  </Router>
);
