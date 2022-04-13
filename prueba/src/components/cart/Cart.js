import { useCartContext } from "../../components/context/CartContext.js"
import { useState } from "react"
import ItemDetail from '../../components/itemdetail/ItemDetail.js'
import { NavLink }  from 'react-router-dom'
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

  import React from 'react'


function Cart() {
    const [dataForm, setDataForm] = useState({
      email: '', name: '', phone: ''
    })
    const [id, setId] = useState('')

    const { cartList, vaciarCart, precioTotal, removeItem } = useCartContext()

    // fucntion {}
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


    const handleChange = (e) => {
        setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value
      })
    }


    console.log(dataForm)
    return (
      <div>
        {id.length !== 0 && `el id de la compra es: ${id}`}
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
    
    </table>
 
   





 











          
                                </>
                      )
                                
        }
        <h1><i class="bi bi-clipboard2-check"></i> Total de la compra${precioTotal()}</h1>
        <button onClick={vaciarCart}>VaciarCarrto</button>
        <form 
                onSubmit={generarOrden}                 
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                    onChange={handleChange}
                /><br />
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                    onChange={handleChange}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                    onChange={handleChange}
                /><br/>
                { <button>Generar Orden</button> }
                
            </form>
      </div>
    )
}

export default Cart


