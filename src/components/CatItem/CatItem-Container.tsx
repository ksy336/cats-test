import React from 'react';
import CatItemView from './CatItem-View';
import { ICat } from '../CatBlock/CatBlock-View';
import './CatItem.css';

const CatItemContainer = ({ id, description, title, type, amount, present, weight }: ICat) => {
  return (
    <CatItemView
      id={id}
      description={description}
      title={title}
      type={type}
      amount={amount}
      present={present}
      weight={weight}
    />
  );
};

export default CatItemContainer;
