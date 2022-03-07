import { useState, useEffect } from "react"

import {getFetch } from '../../Helpers/getFetch.js'
import {productos} from '../../Helpers/getFetch.js'
import ItemCount  from '../../components/contador/ItemCount.js'


function ItemListContainer( {greeting} )  {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    getFetch
    .then((respuesta)=> {
      
      return respuesta
    })
    .then((resp) => setProductos(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))    
  }, [])
  
    const onAdd = (cant) => {
       console.log(cant) 
    }

  console.log(productos)

 return (
      // [1,2,3,4] => nuevo arra [<li>1</li>, ....]
      <>
            <h1>{ greeting }</h1>
            {   loading ? <h1>Cargando...</h1>
                :
                productos.map((prod) => <div 
                                            key={prod.id}
                                            className='col-md-4'
                                        >                        
                                            <div className="card w-100 mt-5" >
                                                <div className="card-header">
                                                    {`${prod.name} - ${prod.categoria}`}
                                                </div>
                                                <div className="card-body">
                                                    <img src={prod.foto} alt='' className='w-50' />
                                                    {prod.price}                                                            
                                                </div>
                                                <div className="card-footer">
                                                    {/* <Link to={`/detalle/${prod.id}`}> */}
                                                        <button className="btn btn-outline-primary btn-block">
                                                            detalle del producto
                                                        </button>                                              
                                                    {/* </Link>                                             */}
                                                                                                                
                                                </div>
                                            </div>
                                        
                                        </div>
                
                )
            }
            <ItemCount initial = {1} stock = {10} onAdd={ onAdd } />
        </>
    )}
export default ItemListContainer




