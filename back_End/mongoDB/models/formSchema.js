const mongoose=require("mongoose")


const formSchema=mongoose.Schema({


    Salutation:String,
    Name:String,
    Name:String,
    Gender:String,
    DateOfBirth:String,
    Age:String,
    Address:String,
    Qualifications:String,
    Profession:String,
    Nominee:String,
    RelationshipWithNominee:String,
    insuranceTyoe:String,
    status:{
        type:String,
        value:"pending"
    }

})


module.exports =mongoose.model("formData", formSchema)