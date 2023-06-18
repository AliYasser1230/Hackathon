import React from 'react'
import logincss from '../css/Login.css'

const Login = () => {
  return (
    <div>
        <div class="container">
        <h2>Login</h2>
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
                <input type="submit" value="Login as Student"/>
            </div>
        </form>

        <div class="admin-login-link">
            <a href="admin.html">Login as Admin</a>
        </div>
    </div>
    </div>
  )
}

export default Login