// import '../style/Add.css';
import React, { useState } from 'react';
import axios from 'axios';

    function Add() {
    
    const [empNo, setEmpNo] = useState('');
    const [empName, setEmpName] = useState('');
    const [empSal, setEmpSal] = useState('');


    async function show(e){
        e.preventDefault(); 
       try{
        const response = await axios.post('http://localhost:3001/api/employees',{empNo , empName , empSal});
        //alert(JSON.stringify(response.data,null,2));
        alert(response.data.message);

       }catch(error){
        alert("Hello : " + error);
       }

    }
    return(
        <div class="input">
            <h1 class ="header">Employee Data</h1>
        <input type="text" placeholder="Enter your ID" value={empNo} onChange={(e)=>{setEmpNo(e.target.value)}}></input><br></br><br></br>
        <input type="text" placeholder="Enter your name" value={empName} onChange={(e)=>{setEmpName(e.target.value)}}></input><br></br><br></br>
        <input type="text" placeholder="Enter your salary" value={empSal} onChange={(e)=>{setEmpSal(e.target.value)}}></input><br></br><br></br>
        <button onClick={show}>Submit</button>
        </div>
    )
}

export default Add;
 


    