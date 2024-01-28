import React, { useState } from "react";
import { useDispatch } from "react-redux";


function Form() {
    const dispatch=useDispatch();
    const [age , setAge]=useState()
    const [changeForm,setChangeForm]=useState({
        Salutation:"",
        Name:"",
        Email:"",
        gender:"",
        DateOfBirth:"",
        Age:"",
        Address:"",
        Qualifications:"",
        Profession:"",
        Nominee:"",
        Relation:"",
        // Scheme:""

    })

    console.log(changeForm);




    const onForm=(e)=>{
        setChangeForm({
            ...changeForm,
            [e.target.name]:e.target.value
        })

    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        // dispatch(changeForm)
        console.log(changeForm);
    }



  return (
    <div id="formContainer">
      <form className="form" onSubmit={handleFormSubmit}>
        <select name="Salutation" id="gender" onChange={onForm}>
          <option value="mr">mr</option>
          <option value="mrs">mrs</option>
        </select>

        <input type="name"name="Name" placeholder="name"  onChange={onForm}/>
        <input type="email"name="Email" placeholder="Email"  onChange={onForm}/>

        <select name="gender" id="gender" onChange={onForm}>
          <option value="male" >male</option>
          <option value="female">female</option>
        </select>

        <input type="date" name="DateOfBirth" placeholder="DOB" onChange={onForm}/>
        <input type="age" name="Age" value={12} onChange={onForm}/>
        <textarea type="address" name="Address" placeholder="address" onChange={onForm}/>
        <input type="text" name="Qualifications" placeholder="qualifications" onChange={onForm}/>
        <input type="text" name="Profession" placeholder="proffession" onChange={onForm}/>
        <input type="name" name="Nominee" placeholder="nominee" onChange={onForm}/>
        <input type="text" name="Relation" placeholder="relation" onChange={onForm}/>
        {/* <input type="radio" name="Scheme" onChange={onForm}/> */}

        <input type="submit" />
        
      </form>
    </div>
  )
}



export default Form;
