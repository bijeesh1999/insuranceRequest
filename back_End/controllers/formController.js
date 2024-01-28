
const form=require("../mongoDB/models/formSchema")

const postForm = async (req,res)=>{
    const {...postRequest}=req.body

    try {
        if(!postRequest){
            console.log("data is mondatory");
            res.status(400).json("fields are mandatory")
        }else{
            const postForm=await form.create(postRequest)
            if(postForm){
                res.status(200).json(postForm)
            }else{
                res.status("data posting failed")
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const getForm=async (req,res)=>{

    const allFormData=await form.find({})
    if(allFormData){
        res.status(200).json(allFormData)
    }else{
        res.status(400).json("data is not getting error")
    }

}

const editForm=async (req,res)=>{
    const {...editingData}=req.body;
    const {id}=req.params;
    console.log(id,editingData);
    if(!editingData,!id){
        res.status(400).json("data or id is not getting")
    }else{
        const updatedData=await form.findByIdAndUpdate(id , editingData)
        console.log(updatedData);
        if(updatedData){
            res.status(200).json(updatedData)
        }else{
            res.status(400).json("formEdit is failed")
        }
    }

}




module.exports={postForm , getForm , editForm}