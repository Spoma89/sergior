import { useState, useEffect } from "react"
import React from 'react'
import {getFetch } from '../../Helpers/getFetch.js'
import {productos} from '../../Helpers/getFetch.js'
import ItemCount  from '../../components/contador/ItemCount.js'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


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
            <h1>{  }</h1>
            {   loading ? <h1>Cargando...</h1>
                :
                productos.map((prod) => <div 
                                            key={prod.id}
                                            className='row row-cols-1 row-cols-md-2'
                                        >                        
                                            <div className="row-cols-md-2"  >
                                                <div className="card">
                                                   <h3> {`${prod.name} - ${prod.categoria}`}</h3>
                                                </div>
                                                <div className="card-body">
                                                    <img src={prod.image} alt='' className='w-50' />
                                                    <h4>${prod.price} </h4>                                                           
                                                </div>
                                                <div className="card-footer">
                                                     <Link to={`/detalle/${prod.id}`}> 
                                                        <button className="btn btn-outline-primary btn-block">
                                                            detalle del producto
                                                        </button>                                              
                                                     </Link>                                             
                                                                                                                
                                                </div>
                                            </div>
                                        
                                        </div>

                
                )
            }
            
        </>
    )}
export default ItemListContainer





