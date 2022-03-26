import React from 'react';

import CartWidget from '../carro/CartWidget.js'
import { NavLink }  from 'react-router-dom'
import Cart from '../cart/Cart.js'
import {useCartContext }  from  '../context/CartContext.js'

const Navbar = () => {
  const {cantidadTotalItem}= useCartContext()
  return(
  
<nav className="nav">
<ul className="nav justify-content-center">

  <li className="nav-item">
  <NavLink to="/">Home</NavLink>
  </li>
  <li className="nav-item">
  <NavLink  to="categoria/Obras">Obras</NavLink>
  </li>
  <li className="nav-item">
    <NavLink  to="categoria/Agua">Agua</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="cart" >
    {cantidadTotalItem()!==0 && cantidadTotalItem ()}
   <CartWidget/>
  </NavLink>
  </li>
 
</ul>
</nav>
)

}

export default Navbar;
