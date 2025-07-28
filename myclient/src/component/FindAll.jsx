import React, { useState } from 'react';
import axios from "axios";

 //import '../style/FindAll.css';

export function FindAll() {
    
    const [employees, setEmployees] = useState([]);
    async function findAllHandler(e){
        e.preventDefault();
    try{
        const response = await axios.get('https://ruchi-employee-management.onrender.com/api/employees');
        //alert(JSON.stringify(response.data,null,2));
        setEmployees(response.data);

       }catch(err){
        alert(err);
       }
    }
    return (
        <div className="conatiner-findall" >
            <h2>Find All Records</h2>
            <hr/>
            <form onSubmit={findAllHandler}>
                <button type="submit">Get All Records</button>
</form>
<div>
    <table>
        <thead>
            <th>ID</th>
            <th>No</th>
            <th>Name</th>
            <th>Sal</th>
        </thead>
        <tbody>
            {
                employees.length > 0 ?(
                    employees.map(emp =>(
                        <tr>
                            <td>{emp._id}</td>
                            <td>{emp.empNo}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.empSal}</td>
                        </tr>
                    ))
                ) : <tr><td colspan={'4'}></td></tr>
            }
        </tbody>
    </table>
</div>
</div>
    )
}
        
 
export default FindAll;

    
