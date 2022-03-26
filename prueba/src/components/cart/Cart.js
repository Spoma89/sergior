import { useCartContext } from "../../components/context/CartContext"
import { useState } from "react"
import ItemDetail from '../../components/itemdetail/ItemDetail.js'

  function Cart() {
    const [dataFomr, setDataFomr] = useState()

    const { cartList, vaciarCart, precioTotal } = useCartContext()

    return (
      <div>
        cart
        { cartList.map(item => <div>
          <img src={item.foto} alt='imágen' className='w-25' />
          <h3>Nombre: {item.name}</h3> 
          <h4>Precio: {item.price}</h4>
           cantidad:{item.cantidad} </div>) }
        <button onClick={vaciarCart}>comprar</button>
      </div>
    )
}

export default Cart
