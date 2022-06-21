import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CatBlock from './components/CatBlock';
import './App.css';

function App() {
    const catInfo = [
        {id: 0, description: "Сказочное заморское яство", title: "Нямушка с фуа-гра", amount: 10, present: "мышь в подарок"},
        {id: 1, description: "Сказочное заморское яство", title: "Нямушка с рыбой", amount: 40, present: "2 мыши в подарок"},
        {id: 2, description: "Сказочное заморское яство", title: "Нямушка с курой", amount: 100, present: "5 мышей в подарок"},
    ]
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CatBlock cats={catInfo}/>} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
