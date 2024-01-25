const form=require('../mongoDB/models/formSchema')


const getAllRequest= async (req,res)=>{

    const allReqest=await form.find();
    res.status(200).json(allReqest)
    console.log(allReqest);

}

const postARequest=async (req,res)=>{
    try {
        const {...formData}=req.body
        if(!formData){
            res.status(400).json("some fields are mandatory")
        }else{
            const sucess=await form.create(formData)
            if(sucess){
                res.status(200).json(sucess)
            }else{
                res.status(404).json("data creation failed")
            }
        }
    } catch (error) {
        console.log(error);
    }
}


const putOneRequest=async (req,res)=>{

    const {...data}=req.body;;
    const {id}=req.params;
    console.log(id);

    const updateData=await form.findByIdAndUpdate(id,data)

    res.status(200).json(updateData)

}


module.exports={getAllRequest , postARequest , putOneRequest };