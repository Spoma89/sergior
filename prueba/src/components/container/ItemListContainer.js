import { useState, useEffect } from "react"
import React from 'react'
import {getFetch } from '../../Helpers/getFetch.js'
import {productos} from '../../Helpers/getFetch.js'
import ItemCount  from '../../components/contador/ItemCount.js'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import Item from '../../components/item/Item.js'
import ItemList from '../../components/itemlist/Itemlist.js'
import Logo from '../../components/logo/Logo.js'
import Footer from '../../components/footer/Footer.js'

function ItemListContainer( {greeting} )  {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  
  const { categoriaId } = useParams()

     useEffect(() => {
        const db = getFirestore()
        if (categoriaId) {
            const queryColection = collection(db, 'items')
            const queryFilter = query( queryColection, where('categoria', '==', categoriaId)  )
            getDocs(queryFilter)
            .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false)) 
        }else{
            const queryColection = collection(db, 'items')
            getDocs(queryColection)
            .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))             
        }

    }, [categoriaId])
   useEffect(() => {
         const db = getFirestore()
         const queryColection = collection(db, 'items')
        getDocs(queryColection)
         .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
         .catch(err => console.log(err))
        .finally(()=> setLoading(false))     
     },[])


    
    
   
  
    const onAdd = (cant) => {
       
    }

  


 return (
     // [1,2,3,4] => nuevo arra [<li>1</li>, ....]
      <>
      <Logo/>
            <h1>{ greeting }</h1>
            {   loading ? <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
                :
               <ItemList productos= {productos} />                
                
            }
            
           <Footer/> 
        </>
    )}
export default ItemListContainer

   


           
