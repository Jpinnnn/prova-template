import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./template/Home";
import SignIn from './template/SignIn';
import SignUp from "./template/SignUp";

function App() {
  return (
    
      <>
      <BrowserRouter>
        <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route exact path="/sign-in" element={<SignIn/>} />
        <Route exact path="/sign-up" element={<SignUp/>} />

        </Routes> 
      </BrowserRouter> 
      <br></br> 

      </>



  );
}

export default App;
