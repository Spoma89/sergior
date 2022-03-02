import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.js'
import CartWidget from './components/carro/CartWidget.js'
import ItemCount  from './components/contador/ItemCount.js'



function App() {


const saludo = 'Hola'

  return (
    <div className="App">
   
    <Navbar/>
    <ItemCount/>
    

    </div>
  );
}

export default App;
