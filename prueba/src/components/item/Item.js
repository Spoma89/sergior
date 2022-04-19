import React from 'react'
import { Link } from "react-router-dom"


function Item({prod}) {
    console.log('Item')
    return (
        <div 
            key={prod.id}
            style={{ marginLeft: 100}}
            className='col-md-3'
        >                        
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    <p>{`${prod.name} - ${prod.categoria}`}</p>
                </div>
                <div className="card-body">
                    <img src={prod.image} alt='' className='w-50' />
                    <h3>Precio contado ${prod.price}</h3>                                                            
                </div>

                <div className="card-footer">
                    <Link to={`detalle/${prod.id}`} >
                        <button className="btn btn-light">
                            ir adetalle del producto
                        </button>                                              
                    </Link>
                    
                                                                                
                </div>
            </div>
        
        </div>
    )
}

export default Item


