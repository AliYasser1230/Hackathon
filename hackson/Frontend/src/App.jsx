import './App.css';
import Admin from './pages/Admin';
import Login from './pages/Login';
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
  
  return (
    <Router>    
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/admin' element={<Admin/>}/>
        </Routes>
      
    </Router>

   
  );
}

export default App;
