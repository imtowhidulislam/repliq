import './App.css';
import { Account, Cart, Dashboard, Footer, Home, Navbar, Product } from './container/index';
import { Routes,Route } from 'react-router-dom';
import "./assets/global.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='product' element={<Product />}></Route>
        <Route path='dashboard' element={<Dashboard/>}></Route>
        <Route path='account' element={<Account/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
