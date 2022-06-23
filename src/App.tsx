import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CatBlock from './components/CatBlock';
import './App.css';

function App() {
  const catInfo = [
    {
      id: 0,
      description: 'Сказочное заморское яство',
      title: 'Нямушка',
      type: 'с фуа-гра',
      amount: 10,
      present: 'мышь в подарок',
      weight: '0,5',
    },
    {
      id: 1,
      description: 'Сказочное заморское яство',
      title: 'Нямушка',
      type: 'с рыбой',
      amount: 40,
      present: '2 мыши в подарок',
      weight: '2',
    },
    {
      id: 2,
      description: 'Сказочное заморское яство',
      title: 'Нямушка',
      type: 'с курой',
      amount: 100,
      present: '5 мышей в подарок заказчик доволен',
      weight: '5',
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CatBlock cats={catInfo} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
