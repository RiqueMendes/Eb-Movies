import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react'
import MoviesYear from './Components/MoviesYear'
import NavBar from './Components/NavBar'
import MoviesAlp from "./Components/MoviesAlp";
import { Routes, Route } from 'react-router-dom';
import MoviesCountry from './Components/MoviesCountry'

function App() {
 const[href, setHref] = useState(null)
 

  useEffect(()=>{
    setHref(window.location.href)
  }, [])


console.log(href)
  return (
    
    <> 
    <NavBar/>
   <Routes>
        <Route path="/" element={<MoviesYear/>} />
        <Route path="/home" element={<MoviesYear/>} />
        <Route path="/action/3.1" element={<MoviesAlp/>}/>
        <Route path="/action/3.3" element={<MoviesYear/>} />
        <Route path="/action/3.4" element={<MoviesCountry/>} />
    </Routes>
    </>
  );
}

export default App;
