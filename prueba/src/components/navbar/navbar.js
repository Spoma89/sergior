import React from 'react';
import Logo from '../logo/Logo.js'
import CartWidget from '../carro/CartWidget.js'
import { NavLink }  from 'react-router-dom'
import Cart from '../cart/Cart.js'
import {useCartContext }  from  '../context/CartContext.js'
import Stilogo from '../stilogo/Stilogo.js'
const Navbar = () => {
  const {cantidadTotalItem}= useCartContext()
  return(
  

 <ul>
 <li>
    <NavLink to="cart" >
  
   

    
   <CartWidget/>
  
  </NavLink>
  </li>

  <li>
  <NavLink to="/">Home</NavLink>
  </li>
  <li>
  <NavLink  to="categoria/Obras">Obras</NavLink>
  </li>
  <li>
    <NavLink  to="categoria/Agua">Agua</NavLink>
  </li>
  <dl>
  <li>
    <Stilogo/>
  </li>
  </dl>
  
</ul>

)

}

export default Navbar;
