import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";

function App({ active, background }) {
   return (
      <div className={background && { background }}>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   )
}


export default App;

