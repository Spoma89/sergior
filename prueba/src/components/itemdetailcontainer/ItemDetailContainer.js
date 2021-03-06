import React from 'react'
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../../components/itemdetail/ItemDetail.js'



const ItemDetailContainer = () => {
 const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
 const { detalleId } = useParams()
	
 

   useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, 'items', detalleId)
        getDoc(queryDb)
        .then(resp => setProducto( { id: resp.id, ...resp.data() } ))
        .catch(err => console.log(err))
        .finally(() =>setLoading(false))
        
    },[])



  return (
    
<>
   <ItemDetail producto={producto} />

  </>  
  )
}

export default ItemDetailContainer;