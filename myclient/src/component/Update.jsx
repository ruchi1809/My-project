import axios from "axios";
import { useState } from "react"
//import '../style/Update.css';

function Update(){

    const[id,setId]     = useState("");
    const[empNo,setNo]     = useState("");
    const[empName,setName] = useState("");
    const[empSal,setSal]   = useState("");
    
    async function updateHandler(e)
    {
        e.preventDefault();
        try
        {
const response = await axios.put(`https://ruchi-employee-management.onrender.com/api/employees/${id}`, {empNo,empName,empSal });
            alert('Data Updated');
        }
        catch(err)
        {
            alert(err);
        }
    }

    return(
        <div class="container-update">
            <h2>Update Record Screen</h2>
            <hr/>
            <form onSubmit={updateHandler}>
                <input type="text" placeholder="Enter Id"   value={id}      onChange={e => setId(e.target.value)}   required/><br/><br/>
                <input type="text" placeholder="Enter No"   value={empNo}   onChange={e => setNo(e.target.value)}   required/><br/><br/>
                <input type="text" placeholder="Enter Name" value={empName} onChange={e => setName(e.target.value)} required/><br/><br/>
                <input type="text" placeholder="Enter Sal"  value={empSal}  onChange={e => setSal(e.target.value)}  required/><br/><br/>
                <button type="submit">Update Record</button>

            </form>
        </div>
    )
}
export default Update;
