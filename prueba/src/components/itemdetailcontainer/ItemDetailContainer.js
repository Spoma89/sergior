import React from 'react'
import {useEffect,useState} from 'react'
import {getFetch}   from '../../Helpers/getFetch.js'
import ItemDetail from '../../components/itemdetail/ItemDetail.js '

const ItemDetailContainer = () => {
 const [producto, setProducto] = useState({})
useEffect(()=>{ 

getFetch
.then(resp => setProducto(resp.find(prod=> prod.id===2)))



console.log(producto)


},[]) 


  return (
    

   <ItemDetail producto={producto}/>

    
  );
};

export default ItemDetailContainer;
