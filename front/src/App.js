
import './App.css';
import React from 'react';
import Header from './componentes/layaout/Header';
import { Footer } from './componentes/layaout/Footer';
import { Home } from './componentes/Home';
import { ProductDetails } from './componentes/products/ProductsDetails';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/Home" element= {<Home />} />
            <Route path="/producto/:id" element= {<ProductDetails/>}/>
          </Routes>
        </div>
        <Footer />
    </div>
    </Router>
    );
}

export default App;
