import React from 'react'

const ItemDetail = ({producto})=>{

	return(
		<div>
		<h2 className="deta">{producto.name}</h2>
		<h3>${producto.price}</h3>
		<img src={producto.foto} className="r" alt="cemento"></img>
		<p>{producto.categoria}</p>
	</div>
	)
}
export default ItemDetail
