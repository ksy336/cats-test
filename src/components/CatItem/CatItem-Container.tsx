import React, { useRef, useState } from 'react';
import CatItemView from './CatItem-View';
import { ICat } from '../CatBlock/CatBlock-View';
let isClicked = false;
import './CatItem.css';

const CatItemContainer = ({ id, description, title, type, amount, present, weight }: ICat) => {
  const [disabledBlock, setDisabledBlock] = useState(false);
  const linkRef = useRef(null);
  const catBlockRef = useRef(null);
  const dotRef = useRef(null);
  const insideBlockRef = useRef(null);
  const descriptionRef = useRef(null);
  const disableItemRef = useRef(null);
  const titleRef = useRef(null);

  const chooseRightSelectedText = () => {
    if (catBlockRef.current.id === '0') {
      linkRef.current.innerText = 'Печень утки разварная с артишоками.';
    } else if (catBlockRef.current.id === '1') {
      linkRef.current.innerText = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
    } else if (catBlockRef.current.id === '2') {
      linkRef.current.innerText = 'Филе из цыплят с трюфелями в бульоне.';
    }
  };

  const chooseDisableSelectedText = () => {
    linkRef.current.style.color = '#FFFF66';
    if (catBlockRef.current.id === '0') {
      linkRef.current.innerText = 'Печалька, с фуа-гра закончился.';
    } else if (catBlockRef.current.id === '1') {
      linkRef.current.innerText = 'Печалька, с рыбой закончился.';
    } else if (catBlockRef.current.id === '2') {
      linkRef.current.innerText = 'Печалька, с курой закончился.';
    }
  };

  const dontWantToBuy = () => {
    insideBlockRef.current.style.backgroundImage =
      'linear-gradient(to right, transparent 15%, #E52E7A 0%, #E52E7A 100%), linear-gradient(to bottom, transparent 9%, #E52E7A 0%, #E52E7A 100%)';
    insideBlockRef.current.style.borderBottom = '4px solid #E52E7A';
    insideBlockRef.current.style.borderRight = '4px solid #E52E7A';
    catBlockRef.current.style.background =
      'linear-gradient(135deg, transparent 38px, #F2F2F2 20px), linear-gradient(135deg, transparent 32px, #E52E7A 30px)';
    chooseRightSelectedText();
    dotRef.current.style.background = '#E52E7A';
    descriptionRef.current.innerText = 'Котэ не одобряет?';
    descriptionRef.current.style.color = '#E52E7A';
  };

  const selectItemToBuy = (event) => {
    event.preventDefault();
    insideBlockRef.current.style.backgroundImage =
      'linear-gradient(to right, transparent 15%, #D91667 0%, #D91667 100%), linear-gradient(to bottom, transparent 9%, #D91667 0%, #D91667 100%)';
    insideBlockRef.current.style.borderBottom = '4px solid #D91667';
    insideBlockRef.current.style.borderRight = '4px solid #D91667';
    catBlockRef.current.style.background =
      'linear-gradient(135deg, transparent 38px, #F2F2F2 20px), linear-gradient(135deg, transparent 32px, #D91667 30px)';
    chooseRightSelectedText();
    dotRef.current.style.background = '#D91667';
  };

  const blurElementHandler = (event) => {
    if (isClicked) {
      dontWantToBuy();
      isClicked = false;
    } else {
      selectItemToBuy(event);
      isClicked = true;
    }
  };
  const setDisableItem = () => {
    setDisabledBlock(true);
    if (disabledBlock) {
      insideBlockRef.current.style.opacity = '0.5';
      insideBlockRef.current.style.backgroundImage =
        'linear-gradient(to right, transparent 15%, #B3B3B3 0%, #B3B3B3 100%), linear-gradient(to bottom, transparent 9%, #B3B3B3 0%, #B3B3B3 100%)';
      insideBlockRef.current.style.borderBottom = '4px solid #B3B3B3';
      insideBlockRef.current.style.borderRight = '4px solid #B3B3B3';
      catBlockRef.current.style.background =
        'linear-gradient(135deg, transparent 38px, #F2F2F2 20px), linear-gradient(135deg, transparent 32px, #B3B3B3 30px)';
      chooseRightSelectedText();
      dotRef.current.style.background = '#F2F2F2';
      chooseDisableSelectedText();
      descriptionRef.current.style.color = '#B3B3B3';
      titleRef.current.style.color = 'B3B3B3';
    }
  };
  return (
    <CatItemView
      id={id}
      description={description}
      title={title}
      type={type}
      amount={amount}
      present={present}
      weight={weight}
      catBlockRef={catBlockRef}
      blurElementHandler={blurElementHandler}
      insideBlockRef={insideBlockRef}
      descriptionRef={descriptionRef}
      titleRef={titleRef}
      dotRef={dotRef}
      linkRef={linkRef}
      selectItemToBuy={selectItemToBuy}
      disableItemRef={disableItemRef}
      setDisableItem={setDisableItem}
    />
  );
};

export default CatItemContainer;
