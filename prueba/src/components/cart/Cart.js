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
        {id.length !== '' && `el id de la compra es: ${id}`}
        { cartList.map(item =>  <>
                                  <li key={item.id}>
                                    nombre: {item.name} precio: {item.price} cantidad:{item.cantidad}
                                  </li>
                                  <li>el total de la compra es${item.cantidad*item.price}</li>
                                  <li>${precioTotal()}</li>
                                  <button onClick={() => removeItem(item.id) }> X </button> <hr></hr>
                                </>
                      )
                                
        }
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
