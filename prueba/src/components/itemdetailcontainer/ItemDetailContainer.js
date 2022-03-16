import React from 'react'
import {useEffect,useState} from 'react'
import {getFetch}   from '../../Helpers/getFetch.js'
import ItemDetail from '../../components/itemdetail/ItemDetail.js'
import { useParams } from 'react-router-dom'





const ItemDetailContainer = () => {
 const [producto, setProducto] = useState({})
 const { detalleId } = useParams()
	
useEffect(()=>{ 

getFetch
.then(resp => setProducto(resp.find(prod=> prod.id===detalleId)))






},[]) 


  return (
    
<>
   <ItemDetail producto={producto} />

  </>  
  )
}

export default ItemDetailContainer;
