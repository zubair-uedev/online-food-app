import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null)
const StorecontextProvider = (props)=>{
    const [cartItems,setcartItems] = useState({});

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setcartItems((pre)=>({...pre,[itemId]:1}))
        }else{
            setcartItems((pre)=>({...pre,[itemId]:pre[itemId]+1}))
        }
    }
    const removeFromCart = (itemId)=>{
        setcartItems((pre)=>({...pre,[itemId]:pre[itemId]-1}))
    }  
    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])  
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id === item);
            totalAmount += itemInfo.price* cartItems[item];
            }
        }
        return totalAmount;
    }
    const contextValue ={
        food_list,
        cartItems,
        setcartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return(
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default StorecontextProvider