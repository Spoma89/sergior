import { createContext, useState, useContext } from "react"







const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const agregarCart = (item) => {
     if (cartList.length > 0) {
            cartList.forEach(prod =>prod.id === item.id && (item.quantity += prod.quantity));
            setCartList([...cartList.filter(prod => prod.id !== item.id), item]);
        } else {
            setCartList([...cartList, item]);
        }
    }
    
    

const addCantidad = (item)=>{
    const itemCantidad =cartList.map (item.id ? {... item,cantidad: item.cantidad += 1}: item);
    return setCartList(itemCantidad)
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
            cantidadTotalItem,
            addCantidad
            
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
