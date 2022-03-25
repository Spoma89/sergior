import { useCartContext } from "../../components/context/CartContext"
import { useState } from "react"
import ItemCount from '../../components/itemdetail/ItemDetail.js'

  function Cart() {
    const [dataFomr, setDataFomr] = useState()

    const { cartList, vaciarCart, precioTotal } = useCartContext()

    return (
      <div>
        cart
        { cartList.map(item => <li>Nombre: {item.name} Precio: {item.price} cantidad:{item.cantidad} </li>) }
        <button onClick={vaciarCart}>VaciarCarrto</button>
      </div>
    )
}

export default Cart
