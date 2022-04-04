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
    <div>
        <h3>{producto.name}</h3>
        <img src={producto.image} alt='imágen' className='w-25' />
        <h3>{producto.price}</h3>
        { count ?
            <Link to='/cart'>
              <button className='btn btn-outline-primary'>Ir al Cart</button>
            </Link> 
          :
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        }
    </div>
  )
}



export default ItemDetail
