import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";



export const postForm=createAsyncThunk("postForm",

 async(formData)=>{
    const postFormData=await axios.post("http://localhost:8080/form",formData)
        return postFormData;
 })


 export const getAllForm=createAsyncThunk("getAllForm" ,

 async()=>{
    const allFormData=await axios.get("http://localhost:8080/form")
    return allFormData
 })


 export const editOneFormData=createAsyncThunk("postForm",

 async(id,formData)=>{
    const editData=await axios.post(`http://localhost:8080/form${id}`,formData)
        return editData;
 })

