import { createContext } from "react";
import { useState } from "react";

export const CartContext=createContext()

export const CartContextProvider=({children})=>{

    const[cartCount,setCartCount]=useState(0)


    return(
        <CartContext.Provider value={{cartCount,setCartCount}}>
            {children}
        </CartContext.Provider>
    ) 

}

