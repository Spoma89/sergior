 import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
 import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar.js'
import CartWidget from './components/carro/CartWidget.js'
import ItemCount  from './components/contador/ItemCount.js'
import ItemListContainer from './components/container/ItemListContainer.js'
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer.js'
import CartContextProvider from './components/context/CartContext.js'
import Cart from './components/cart/Cart.js'
import React from 'react'





import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

const onAdd= cant =>{
 console.log(cant)
}

  return (
    
  <CartContextProvider>

  	<BrowserRouter>
    <div className="App">
   
    <Navbar />
    <Routes>
     <Route path='/detalle/:detalleId'element={<ItemDetailContainer />} />
      <Route path='/' element={<ItemListContainer greeting='soy ITEMLISTCONTAINER' />} />                                        
     <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting='soy ITEMLISTCONTAINER' />} />
     <Route path='/count'element={<ItemCount initial={1} stock={100} onAdd={onAdd} />}/>
    <Route path='/cart'element={<Cart />}/>
    
    <Route path='/*' element={ <Navigate to='/'replace />} />
   
   	</Routes>
    </div>
    
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
