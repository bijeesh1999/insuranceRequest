import { configureStore } from '@reduxjs/toolkit'

import formSlice from './formSlice'




const store=configureStore({
  reducer:{
    get:formSlice,
  }
  
})

export default store;