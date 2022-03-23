import React from 'react';
import { useCartContext } from "../../components/context/CartContext.js"


const Cartwidget = () => { 


	 const { cartList, vaciarCart } = useCartContext()
    console.log(cartList)


  return(


  	<div>
  		

  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2C8_5zVY5_5fuE6hkoo9wjPpbBoy8b_4xg&usqp=CAU" className="carro" alt="..."></img>
 { cartList.map(item => <li>nombre: {item.name} precio: {item.price} cantidad:{item.cantidad}</li>) }
        <button onClick={vaciarCart}>VaciarCarrto</button>


 </div>
 

  
)
}


export default Cartwidget;
