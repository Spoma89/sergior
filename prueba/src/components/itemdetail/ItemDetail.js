import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from '../../components/contador/ItemCount.js'
import {useState} from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({producto})=>{
  const [count, setCount] = useState(null)
  const onAdd= cant =>{
 console.log(cant)
 setCount(cant)

}

	return(
		<div>
		<h2 className="deta">{producto.name}</h2>
		<h3>${producto.price}</h3>
		<img src={producto.foto} className="r" alt="cemento"></img>
		<p>{producto.categoria}</p>
		{ count ?
            <Link to='/cart'>
              <button >Ir al Cart</button>
            </Link> 
          :
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        }
    	</div>
  )
}


export default ItemDetail
