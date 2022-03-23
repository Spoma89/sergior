import { useState, useEffect } from "react"

import {getFetch } from '../../Helpers/getFetch.js'
import {productos} from '../../Helpers/getFetch.js'
import ItemCount  from '../../components/contador/ItemCount.js'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'



function ItemListContainer( {greeting} )  {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  
  const { categoriaId } = useParams()

  useEffect(() => {
    if (categoriaId) {
      getFetch// llamada a la api
      .then((respuesta)=> {
        //throw new Error('Esto es un error')
        //console.log(respuesta) //json  convierto a objeto js
        return respuesta
      })
      .then((resp) => setProductos( resp.filter(prod=> prod.categoria === categoriaId) ))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))      
      
    }else{
      getFetch// llamada a la api
      .then((respuesta)=> {
        //throw new Error('Esto es un error')
        //console.log(respuesta) //json  convierto a objeto js
        return respuesta
      })
      .then((resp) => setProductos(resp))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))      

    }

  }, [categoriaId])
console.log(categoriaId)
    
    
    // useEffect(() => {
    //     let url = 'assets/DATA.json'
    //     fetch(url)
    //     .then(resp => resp.json() )
    //     .then(resp => console.log(resp))
    // }, [])
    
  
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
                                            className='col-md-4'
                                        >                        
                                            <div className="card text-dark bg-light mb-3"  >
                                                <div className="">
                                                    {`${prod.name} - ${prod.categoria}`}
                                                </div>
                                                <div className="card-body">
                                                    <img src={prod.foto} alt='' className='w-50' />
                                                    {prod.price}                                                            
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




