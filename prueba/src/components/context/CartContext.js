import { createContext, useState, useContext } from "react"







const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const agregarCart = (item) => {

      
        setCartList( [ ...cartList, item ] )
    }
     const precioTotal =()=>{
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price) , 0)
    }
const cantidadTotalItem =()=>{
    return cartList.reduce((acum,prod)=> acum += prod.cantidad, 0)
}

  const removeItem= (id)=>{
   
   setCartList(cartList.filter(item => item.id !==id))
  }

    const vaciarCart=()=>{
        setCartList( [])
    }


    return (
        <CartContext.Provider value={{
           
            cartList,
            agregarCart,
            vaciarCart,
            removeItem,
            cantidadTotalItem
            
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
