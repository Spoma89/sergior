import React from 'react';

import CartWidget from '../carro/CartWidget.js'
import { NavLink } from 'react-router-dom'
import Cart from '../cart/Cart.js'

const Navbar = () => {
  return(
  

<ul className="nav justify-content-center">

  <li className="nav-link">
  <NavLink to="/">home</NavLink>
  </li>
  <li className="nav-item">
  <NavLink  to="categoria/Obras">Obras</NavLink>
  </li>
  <li className="nav-item">
    <NavLink  to="categoria/Agua">Agua</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="cart" >
   <CartWidget/>
  </NavLink>
  </li>
 
</ul>
)

}

export default Navbar;
 