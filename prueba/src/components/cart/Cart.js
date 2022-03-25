import { useCartContext } from "../../components/context/CartContext"
import { useState } from "react"


  function Cart() {
    const [dataFomr, setDataFomr] = useState()

    const { cartList, vaciarCart, precioTotal } = useCartContext()

    return (
      <div>
        cart
        { cartList.map(item => <li>nombre: {item.name} precio: {item.price} cantidad:{item.cantidad} </li>) }
        <button onClick={vaciarCart}>VaciarCarrto</button>
      </div>
    )
}

export default Cart
