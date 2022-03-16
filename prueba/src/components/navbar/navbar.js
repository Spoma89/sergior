import React from 'react';

import CartWidget from '../carro/CartWidget.js'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return(
  

<ul className="nav justify-content-center">

  <li className="nav-item">
  <NavLink className="nav-link" to="/">home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="detalle">detalle</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/"></NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="count" >
   <CartWidget/>
  </NavLink>
  </li>
 
</ul>
)

}

export default Navbar;
