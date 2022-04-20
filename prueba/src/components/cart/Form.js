import React from 'react'
import { useState } from "react"
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
import Cart from '../../components/cart/Cart.js'
import { useCartContext } from "../../components/context/CartContext.js"
import ItemDetail from '../../components/itemdetail/ItemDetail.js'



function Form() {
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
 if (id.length !== 0) {
        return <div>
                     
<h1 className="comprafinalizada">Tu compra se realizo correctamente</h1>
<h2> Total de la compra ${precioTotal()}</h2>
 <h2>{id.length !== 0 && `Tu  comprobante de compra es:  ${id}`} </h2>                  
                    <NavLink to="/" className="btn btn-primary"onClick={vaciarCart}>Aceptar</NavLink>
                </div>
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
 const validar = (dataForm) => {
     if (dataForm.name.length <= 5) {
        alert("El nombre es demasiado corto")
        return false
    }
    if (dataForm.email.length <= 7) {
        alert("El email es inválido")
        return false
    }
    if (dataForm.phone.length <= 8) {
        alert("El teléfono es inválido")
        return false
    }

    return true
}
    
    console.log(dataForm)
    return (

      <div>
     
     <h2><i className="bi bi-clipboard2-check"></i> Total de la compra${precioTotal()}</h2>
        <h1>Para finalizar la compra completa los datos </h1>





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

                
               
                

            </form>

 

   

          
                               
                      
                                
        
       
      </div>
      </div>
    )
}

export default Form


