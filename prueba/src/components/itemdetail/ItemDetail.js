import React from 'react'

const ItemDetail = ({producto})=>{
	return(

	<div>
		<h2>{producto.name}</h2>
		<p>{producto.categoria}</p>
	</div>
	)
}
export default ItemDetail