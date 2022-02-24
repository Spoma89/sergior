import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.js'
import CartWidget from './components/carro/CartWidget.js'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer.js'



function App() {

const saludo = 'Hola'

  return (
    <div className="App">
   
    <Navbar/>
    <ItemListContainer saludo={ saludo } />
    

    </div>
  );
}

export default App;
