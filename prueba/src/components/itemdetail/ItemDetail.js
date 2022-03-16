import React from 'react'

const ItemDetail = ({producto})=>{

	return(

	<div>
		<h2>{producto.name}</h2>
		<h3>{producto.price}</h3>
		<h4>{producto.foto}</h4>
		<p>{producto.categoria}</p>
	</div>
	)
}
export default ItemDetail