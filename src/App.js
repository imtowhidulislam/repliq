import './App.css';
import { Account, Cart, Dashboard, Demo, Footer, Home, Navbar, Product } from './container/index';
import { ProductContextProvider } from './context/productContext';
import { Routes,Route } from 'react-router-dom';

import "./assets/global.css"
import ProductDetails from './components/Product/ProductDetails';
import ProductDetailsPage from './components/Product/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home/:id' element={<ProductDetails/>}></Route>
          <Route path='product' element={<Product />}></Route>
          <Route path='/product/:id' element={<ProductDetails />}></Route>
          <Route path='dashboard' element={<Dashboard/>}></Route>
          <Route path='account' element={<Account/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
        </Routes>
      </ProductContextProvider>
      <Footer />
      {/* <Demo /> */}
    </div>
  );
}

export default App;
