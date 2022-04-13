import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from '../../components/contador/ItemCount.js'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from "../../components/context/CartContext.js"

const ItemDetail = ({producto}) => {
  const [count, setCount] = useState(null)

  const { agregarCart, cartList,} = useCartContext()

  const onAdd = cant =>{
   
    setCount(cant)
    agregarCart({ ...producto, cantidad: cant })
  }
  console.log(cartList)

  return (  

<div className="container">
  <div className="card">
    <div className="card-header">
      <img src ={producto.image} alt="productos"className="fotodetail"></img>
    </div>
    <div className="card-body">
      <span className="tag tag-teal">{producto.categoria}</span>
      <h4>{producto.name}</h4>
       <h4>{producto.descripcion}</h4>
      <h4>${producto.price}</h4>
      { count ?
            <Link to='/cart'>
              <button className='btn btn-outline-primary'>Ir al Cart</button>
            </Link> 
          :
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        }
        
        
        
      </div>
    </div>
  </div>

    
  )
}
 


   
        



export default ItemDetail
