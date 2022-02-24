import React from 'react';

import CartWidget from '../carro/CartWidget.js'


const Navbar = props => (
  

<ul className="nav justify-content-center">
<CartWidget/>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="Productos">Productos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Ofertas</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Quienes somos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Cotizaciones</a>
  </li>
  
</ul>

  
);

export default Navbar;
