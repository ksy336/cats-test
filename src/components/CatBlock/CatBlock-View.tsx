import React from 'react';
import CatItem from '../CatItem';

export interface ICat {
  id: number;
  description: string;
  title: string;
  type: string;
  amount: number;
  present: string;
  weight: string;
}
const CatBlockView = ({ cats }) => {
  return (
    <>
      <header className="feed-cat-header header-wrapper ">
        <h1 className="cat-header__heading">Ты сегодня покормил кота?</h1>
      </header>
      <main className="block-wrapper layout-three-column">
        {cats?.map(({ id, description, title, type, amount, present, weight }: ICat) => (
          <CatItem
            key={Math.random().toString()}
            id={id}
            description={description}
            title={title}
            type={type}
            amount={amount}
            present={present}
            weight={weight}
          />
        ))}
      </main>
    </>
  );
};

export default CatBlockView;
