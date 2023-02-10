import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import {data} from "./data"
// create a slice 
export const postslice= createSlice({
name:"publicaciones",
initialState:{
     post:[]
},
reducers:{
     addPost:(state)=>{
        state.post = data
     }
   }
})
// config the store 
const store= configureStore({
   reducer: {
      publicaciones: postslice.reducer
   }
})
// export default the store 
export default store
// export the action
export const {addPost} = postslice.actions