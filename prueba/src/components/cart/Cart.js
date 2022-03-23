import { useCartContext } from "../../components/context/CartContext.js"


function Cart() {
    const { cartList, vaciarCart } = useCartContext()
    console.log(cartList)
    return (
      <div>
        cart
        { cartList.map(item => <li>nombre: {item.name} precio: {item.price} cantidad:{item.cantidad}</li>) }
        <button onClick={vaciarCart}>VaciarCarrto</button>
      </div>
    )
}

export default Cart
