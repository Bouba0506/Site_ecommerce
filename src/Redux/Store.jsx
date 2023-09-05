import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./Slices/Cartslice"
const store=configureStore({
    reducer:{
        cart:CartSlice
    }
})
export default store