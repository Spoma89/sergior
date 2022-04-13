import React from 'react';
import { useCartContext } from "../../components/context/CartContext.js"


const Cartwidget = () => { 

const {cantidadTotalItem}= useCartContext()
	 

  return(


  	<div>
  <button type="button" className="btn btn-primary position-relative">
  <i className="bi bi-cart-fill"></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{cantidadTotalItem()!==0 && cantidadTotalItem ()} </span>
</button>


  		
  
 


 </div>
 

  
)
}


export default Cartwidget;
