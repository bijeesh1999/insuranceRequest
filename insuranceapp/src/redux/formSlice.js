import { createSlice } from '@reduxjs/toolkit'

import { postForm,getAllForm,editOneFormData } from './fomApi'



const initialState=({
    postDat:[],
    getData:[],
    editDat:[],
    status:""
})


const formSlice=createSlice({
    name:"form",
    initialState,
    reducers:{},
    extraReducer:(builder)=>{
        builder
        .addCase(postForm.pending, (state) => {
            state.status = "loading";
          })
          .addCase(postForm.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.postDat = action.payload;
          })
          .addCase(postForm.rejected, (state, action) => {
            state.status = "failed";
          })

        //   =============================================

        .addCase(getAllForm.pending, (state) => {
            state.status = "loading";
          })
          .addCase(getAllForm.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.getData = action.payload;
          })
          .addCase(getAllForm.rejected, (state, action) => {
            state.status = "failed";
          })

        //   ===================================================

        .addCase(editOneFormData.pending, (state) => {
            state.status = "loading";
          })
          .addCase(editOneFormData.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.editDat = action.payload;
          })
          .addCase(editOneFormData.rejected, (state, action) => {
            state.status = "failed";
          })
    }
        
    
})

export default formSlice.reducer