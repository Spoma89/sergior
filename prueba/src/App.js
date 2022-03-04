import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.js'
import CartWidget from './components/carro/CartWidget.js'
import ItemCount  from './components/contador/ItemCount.js'
import ItemListContainer from './components/itemlist/ItemListContainer.js'



function App() {




  return (
    <div className="App">
   
    <Navbar/>
    <ItemCount initial={1} stock={10} onAdd={() =>console.log(onAdd)}/>
  

    </div>
  );
}

export default App;
