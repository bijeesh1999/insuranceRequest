import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {axios} from "axios"


export  const postData = createAsyncThunk(
    "postData",
    async (data)=>{

        const postForm= await axios.post("http://localhost:2000",data)
        if(postForm){
            return postForm
        }
        else{
            console.log("error");
        }
})

export  const getData = createAsyncThunk(
    "getData",
    async (data)=>{

        const getFormData= await axios.get("http://localhost:2000")
        if(getFormData){
            return getFormData
        }
        else{
            console.log("error");
        }
})