import { useCartContext } from "../../components/context/CartContext"
import { useState } from "react"
import ItemDetail from '../../components/itemdetail/ItemDetail.js'
import { NavLink }  from 'react-router-dom'
  import React from 'react'



  function Cart() {
    const [dataFomr, setDataFomr] = useState()

    const { cartList, vaciarCart, precioTotal, removeItem } = useCartContext()
  
    return (
      <div>
        <h1>cart</h1>
        { cartList.map(item => <div>
          <img src={item.image} alt='imágen' className='w-25' />
          <h3>Nombre: {item.name}</h3> 
          <h4>Precio: {item.price}</h4>
           cantidad:{item.cantidad} 
            <button onClick={() => removeItem(item.id)} >x</button></div>
           )
            }
        <button onClick={vaciarCart}>comprar</button>
       
      </div>
    )
}


export default Cart
