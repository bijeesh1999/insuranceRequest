import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[form , setForm]=useState({
    Salutation:"",
    Name:"",
    Email:"",
    Gender:"",
    Date:"",
    Age:"",
    Address:"",
    Qualifications:"",
    Profession:"",
    Nominee:"",
    Relationship:"",
    Salutation:""
  })



  const createDAta = (e)=>{
    e.preventdefault();
    alert()
  }

  const dataChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
    
  }





  return (
    <div className="App">
      <form onSubmit={createDAta}>
        <input type='text' name="Salutation" placeholder='Salutation' onChange={dataChange} /> 
        <input type='name' name="Name" placeholder='Name' onChange={dataChange}/>
        <input type='text' name="Email" placeholder='Email' onChange={dataChange}/>
        <input type='text' name="Gender" placeholder='Gender' onChange={dataChange}/>
        <input type='text' name="Date" placeholder='Date' onChange={dataChange}/>
        <input type='text' name="Age" placeholder='Age' onChange={dataChange}/>
        <textarea type='text' name="Address" placeholder='Text' onChange={dataChange}/>
        <input type='text' name="Qualifications" placeholder='Qualifications' onChange={dataChange}/>
        <input type='text' name="Profession" placeholder='Profession' onChange={dataChange}/>
        <input type='text' name="Nominee" placeholder='Nominee' onChange={dataChange}/>
        <input type='text' name="Relationship" placeholder='Relationship' onChange={dataChange}/>
        <input type='text' name="insuranceType" placeholder='insuranceType' onChange={dataChange}/>

        <input type='submit' />
        
      </form>

    </div>
  );
}

export default App;
