import logo from './logo.svg';
import Home from "./components/home/home"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [ user, setLoginUser] = useState({})

  return (
    <div className="App">
<Router>
       
        <Routes>
        <Route path="/" element={ 
              user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            } />
        <Route path="/login"  element={<Login setLoginUser={setLoginUser}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
