import React from 'react'
import Addstud from '../css/Addstud.css'
export default function AddStudent() {
  return (
    <div>
     <div>
        <img src="" alt="" className='home-img' />
      </div>
       <form action="main-stud" method='POST'></form>
       <div className='Container-stud'>
         <label>Add Student</label><br />
         <label>Email: <input type="text" /> </label><br /><br />
         <label>Password: <input type='text'/></label><br /><br />
         <label>GPA: <input type="text" /> </label><br /><br />
         <label>ID: <input type='text'/></label><br /><br />
         <button>Submit</button>
        </div>
      
      </div>
    
  )
}
