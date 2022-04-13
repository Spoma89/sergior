import React from 'react';

import CartWidget from '../carro/CartWidget.js'
import { NavLink }  from 'react-router-dom'
import Cart from '../cart/Cart.js'
import {useCartContext }  from  '../context/CartContext.js'

const Navbar = () => {
  const {cantidadTotalItem}= useCartContext()
  return(
  

 <ul>

  <li>
  <NavLink to="/">Home</NavLink>
  </li>
  <li>
  <NavLink  to="categoria/Obras">Obras</NavLink>
  </li>
  <li>
    <NavLink  to="categoria/Agua">Agua</NavLink>
  </li>
  <li>
    <NavLink to="cart" >
  
   

    
   <CartWidget/>
  
  </NavLink>
  </li>
 
</ul>

)

}

export default Navbar;
