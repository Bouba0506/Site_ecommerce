import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cartitem:[],
    totalcart:0,
    totalquantite:0
}
const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
                const newItem=action.payload;
                const exisItem=state.cartitem.find((Item)=>Item.id===Item.newItem)
                state.totalquantite++;
                if(!exisItem){
                    state.cartitem.push({
                        id:newItem.id,
                        image:newItem.imgUrl,
                        productName:newItem.productName,
                        price:newItem.price,
                        quantity:1,
                        totalPrice:newItem.price
                    })
                }
                else{
                    exisItem.quantity++;
                    exisItem.totalPrice=Number(exisItem.totalPrice)+Number(newItem.price)
                }
                state.totalcart=state.cartitem.reduce((total,item)=>total+ Number(item.price)* Number(item.quantity))
                 
            }
    }
})
export const { addItem}=CartSlice.actions;
export default CartSlice.reducer
