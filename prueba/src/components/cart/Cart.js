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
    const validar = (dataForm) => {
     if (dataForm.nombre.length < 5) {
        alert("El nombre es demasiado corto")
        return false
    }
    if (dataForm.email.length < 7) {
        alert("El email es inválido")
        return false
    }
    if (dataForm.tel.length < 8) {
        alert("El teléfono es inválido")
        return false
    }

    return true
}

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


    const handleChange = (e) => {
        setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value
      })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validar(dataForm) && generarOrden(cartList,
            agregarCart,
            vaciarCart,
            removeItem,
            cantidadTotalItem,
            precioTotal,
            addCantidad )
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
        <h4>Completa tus datos para finalizar la compra </h4>
        <div className="form-floating mb-3">
        <form 
                onSubmit={generarOrden}                 
            >
                <input 
                    type='text' 
                    className="form-control" id="floatingInput"
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                    onChange={handleChange}
                /><br />
                <input 
                    type='text' 
                    className="form-control" id="floatingInput"
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                    onChange={handleChange}
                /><br/>
                <input 
                    type='email'
                    className="form-control" id="floatingInput" 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                    onChange={handleChange}
                /><br/>
                { <button>Generar Orden</button> }

                {id.length !== 0 && `Compra finalizada, el numero de tu compra es: ${id}`}
                 
                 

            </form>
      </div>
      </div>
    )
}

export default Cart


