import{NavLink,Route,Routes} from "react-router-dom";

import Find from "./component/Find";
import Delete from "./component/Delete";
import Update from "./component/Update";
import FindAll from "./component/FindAll";
import Add from "./component/Add";
import "./style/Home.css";
import"./style/Delete.css";
import"./style/Update.css";
import"./style/Find.css";
import"./style/Add.css";
import"./style/FindAll.css";

function Home(){
    return(
        <div>
            <h1>Employee Management</h1>
            <hr/>
                        <nav class="button">
                <NavLink to={"/"}>Add</NavLink>
                <NavLink to={"/Delete"}>Delete</NavLink>
                <NavLink to={"/Find"}>Find</NavLink>
                <NavLink to={"/Update"}>Update</NavLink>
                <NavLink to={"/FindAll"}>FindAll</NavLink> 
                 </nav>
                <hr/>
                <br/>
                <Routes>
                    <Route path="/" element={<Add/>}/>

                    <Route path='/Delete' element={<Delete/>}/>
                    <Route path='/Find' element={<Find/>}/>
                    <Route path='/Update' element={<Update/>}/>
                    <Route path='/FindAll' element={<FindAll/>}/>
                </Routes>
        </div>
    )
}
export default Home;