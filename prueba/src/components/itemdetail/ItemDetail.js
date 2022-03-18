import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from '../../components/contador/ItemCount.js'




const ItemDetail = ({producto})=>{
  const [count, setCount] = useState(null)
	return(
		<div>
		<h2 className="deta">{producto.name}</h2>
		<h3>${producto.price}</h3>
		<img src={producto.foto} className="r" alt="cemento"></img>
		<p>{producto.categoria}</p>
		<ItemCount initial = {1} stock = {10} onAdd={ onAdd } />
	</div>
	)
}
export default ItemDetail
