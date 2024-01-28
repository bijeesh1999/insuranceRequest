const mongoose=require("mongoose");


const formSchema=mongoose.Schema({

    Salutation:String,
    Name:String,
    Email:String,
    Gender:String,
    DateOfBirth:String,
    Age:String,
    Address:String,
    Qualifications:String,
    Profession:String,
    Nominee:String,
    RelationshipWithNominee:String,
    InsuranceScheme:String

})


module.exports=mongoose.model("form",formSchema);