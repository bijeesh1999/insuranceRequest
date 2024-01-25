import { createSlice } from '@reduxjs/toolkit'

import { postData } from './fomApi'



const initialState = { 
    getAllData:[],
    postData:[],
    updateData:[],
    status:""
} 

const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.getAllData = action.payload;
      })
      .addCase(postData.rejected, (state, action) => {
        state.status = "failed";
      });
  },
  
})

export default formSlice.reducer