import { useState } from "react";
import AddStudent from "../Components/AddStudent";
import ReadExcel from "../Components/Readexcel";
import Users from "../Components/Users";
import admincss from '../css/Admin.css'

function Admin() {
  const [choose, setChoose] = useState("add");
    return (
      <div>
        <div>
          <ul className="admin-list">
            <li onClick={()=>{setChoose("add")}}>Add Data</li>
            <li onClick={()=>{setChoose("users")}}>User Data</li>
          </ul>
        </div>
        {
          choose=="add"&&
          <ReadExcel/>
        }
        {
          choose=="users"&&
          <Users/>
        }
      </div>
     
    );
  }
  
  export default Admin;