import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar.js'
import CartWidget from './components/carro/CartWidget.js'
import ItemCount  from './components/contador/ItemCount.js'
import ItemListContainer from './components/itemlist/ItemListContainer.js'



function App() {




  return (
    <div className="App">
   
    <Navbar/>
    <ItemCount initial={1} stock={10} onAdd={1}/>
    <ItemListContainer/>

    </div>
  );
}

export default App;
