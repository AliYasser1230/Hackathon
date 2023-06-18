import './App.css';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Page from './pages/Page';
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
  
  return (
    <div>
    <Router>    
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/student' element={<Page/>}/>
        </Routes>
      
    </Router>
    </div>

   
  );
}

export default App;
