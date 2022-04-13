import { Link } from "react-router-dom"
import React from 'react'

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
                    {`${prod.name} - ${prod.categoria}`}
                </div>
                <div className="card-body">
                    <img src={prod.image} alt='' className='w-50' />
                    {prod.price}                                                            
                </div>

                <div className="card-footer">
                    <Link to={`detalle/${prod.id}`} >
                        <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                        </button>                                              
                    </Link>
                    
                                                                                
                </div>
            </div>
        
        </div>
    )
}

export default Item


