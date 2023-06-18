import {React, useEffect, useState} from 'react'
import logincss from '../css/Login.css'
import axios from 'axios';

const Login = () => {
    const [logType, setLogType] = useState("student");
    const [data,setData] = useState([]);
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const getUsers = async () => {
        try {
          const res = await axios.get('http://localhost:5050/getdata');
          setData(res.data);
        } catch (error) {
          console.log(error.response.body);
        }
      };
      useEffect(()=>{
        getUsers();
        console.log(data);
      },[])
    const handleLogin = (e)=>{
        let flag = false;
        e.preventDefault();
        data.map((info)=>{
            if(email == info.StudentID && password==info.Password)
            {
                flag = true;
            }
            console.log(info);
        })
        if(flag == true)
        {
            window.location.replace('http://localhost:3000/student');
        }
        else{
            setError("Incorrect Information")
        }
    }
  return (
    <div>
        {
            logType=="student"&&
            <div class="container">
            <h2>Student Login</h2>
            <form action="/login" method="POST">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" name="password" required/>
                </div>
                <div class="form-group">
                    <input type="submit" value="Login" onClick={handleLogin}/>
                </div>
            </form>
            <p>{error}</p>
            <div class="admin-login-link">
                <a onClick={()=>{setLogType('admin')}}>Login as Admin</a>
            </div>
        </div>
        }
        {
            logType=="admin"&&
            <div class="container">
            <h2>Admin Login</h2>
            <form action="/login" method="POST">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <div class="form-group">
                    <input type="submit" value="Login"/>
                </div>
            </form>
            <div class="admin-login-link">
                <a onClick={()=>{setLogType('student')}}>Login as Student</a>
            </div>
        </div>
        }
        
    </div>
  )
}

export default Login