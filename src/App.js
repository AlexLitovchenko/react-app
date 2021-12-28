
import React from 'react';
import {Unit} from "./Component/Unit";
//import { Navigation } from './Component/Navigation';
//import {Edit} from "./Component/Edit";

import { BrowserRouter, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div className="container">
          <div className="m-3 d-flex justify-content-center">
       Unit
          </div>
    <Unit/>
    <Routes>
        
    </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
