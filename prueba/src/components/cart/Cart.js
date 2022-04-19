import React from 'react'
import { useState } from "react"
import { NavLink }  from 'react-router-dom'
import { Link } from 'react-router-dom'
import { 
  addDoc, 
  collection, 
  doc, 
  documentId, 
  getDocs, 
  getFirestore, 
  query, 
  updateDoc, 
  where, 
  writeBatch 
} from "firebase/firestore"
import { useCartContext } from "../../components/context/CartContext.js"
import ItemDetail from '../../components/itemdetail/ItemDetail.js'


function Cart() {
    const [dataForm, setDataForm] = useState({
      email: '', name: '', phone: ''


    })
   

    const [id, setId] = useState('')

    const { cartList,
            agregarCart,
            vaciarCart,
            removeItem,
            cantidadTotalItem,
            precioTotal,
            addCantidad } = useCartContext()

    if (cartList.length === 0) {
        return <div className="container my-4">
                     
<h2><i className="bi bi-exclamation-triangle-fill"></i>Tu carrito está vacío selecciona algun producto</h2>
                    
                    <NavLink to="/" className="btn btn-primary">Volver</NavLink>
                </div>
    }
    const generarOrden = async (e)=>{
      e.preventDefault();
         
      let orden = {}      

      orden.buyer = dataForm
      orden.total = precioTotal()

      orden.items = cartList.map(cartItem => {
          const id = cartItem.id;
          const nombre = cartItem.name;
          const precio = cartItem.price * cartItem.cantidad;
          
          return {id, nombre, precio}   
      })
      

      // crear

      const db = getFirestore()
      const queryCollectionSet = collection(db, 'orders')
      addDoc(queryCollectionSet, orden)
      .then(resp => setId(resp.id))
      .catch(err => console.error(err))
      .finally(() => console.log('termino '))

       
       
    }


   

    
    console.log(dataForm)
    return (

      <div>
     
    

        

        { cartList.map(item =>  <><table key={item.id} className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Producto</th>
      <th scope="col">precio</th>
      <th scope="col">cantidad</th>
      <th scope="col">cantidad total</th>
      <th scope="col">Quitar item</th>
    </tr>
  </thead>
  <tbody>
    <tr>

      <th scope="row"></th>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>{item.cantidad}</td>
      <td>${item.cantidad*item.price}</td>
       <button className="remove" onClick={() => removeItem(item.id) }><i class="bi bi-x-circle-fill"></i>  </button> 
    </tr>
    </tbody>    
    <button onClick={vaciarCart}>VaciarCarrto</button>
    </table>
 
   

          
                                </>
                      )
                                
        }
        <h2><i className="bi bi-clipboard2-check"></i> Total de la compra${precioTotal()}</h2>
         <Link to='/form'>
              <button className='btn btn-outline-primary'>Continuar con la compra</button>
            </Link> 
        
      </div>
    )
}

export default Cart


