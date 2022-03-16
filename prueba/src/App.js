 import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
 import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar.js'
import CartWidget from './components/carro/CartWidget.js'
import ItemCount  from './components/contador/ItemCount.js'
import ItemListContainer from './components/itemlist/ItemListContainer.js'
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer.js'


function App() {




  return (
    
  	<BrowserRouter>
    <div className="App">
   
    <Navbar />
    <Routes>
     <Route path='/detalle/:detalleId'element={<ItemDetailContainer />} />
    
    <Route path='/count'element={<ItemCount initial={1} stock={10} onAdd={0} />}/>
    <Route path='/'element={<ItemListContainer />}/>
    <Route path='/*' element={ <Navigate to='/'replace />} />
   
   	</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
