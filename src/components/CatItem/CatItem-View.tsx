import React, { useRef, useState } from 'react';
let isClicked = false;

const CatItemView = ({ id, description, title, type, amount, present, weight }) => {
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
    <>
      <article className="cat-block-content">
        <div className="cat-block" ref={catBlockRef} id={id}>
          <div
            className="inside-block"
            onBlur={blurElementHandler}
            tabIndex={2}
            ref={insideBlockRef}
          >
            <div className="all-description">
              <div className="cat-description">
                <h4 className="cat-description__description" ref={descriptionRef}>
                  {description}
                </h4>
              </div>
              <div className="cat-title">
                <h4 className="cat-title__title" ref={titleRef}>
                  {title}
                </h4>
                <h4 className="cat-title__type" ref={titleRef}>
                  {type}
                </h4>
              </div>
              <div className="cat-food-amount">
                <div className="cat-food">
                  <span className="food-amount" ref={titleRef}>
                    {amount} порций
                  </span>
                  <span className="cat-food-present" ref={titleRef}>
                    {present}
                  </span>
                </div>
              </div>
            </div>
            <div className="dot" ref={dotRef}>
              <span>{weight}</span>
              <span className="dot__weight">кг</span>
            </div>
            <div className="picture-cat">
              <img
                className="picture"
                src={require('../../assets/img/Photo.png')}
                alt="it's a cat"
              />
            </div>
          </div>
        </div>
        <div className="cat-info">
          <div className="cat-product">
            <span className="info" ref={linkRef}>
              Чего сидишь? Порадуй котэ,{' '}
              <a
                href="#"
                className="product-link"
                onClick={(event) => {
                  selectItemToBuy(event);
                }}
              >
                купи.
              </a>
            </span>
            <span className="info" ref={disableItemRef} onClick={setDisableItem}>
              Нажми
            </span>
          </div>
        </div>
      </article>
    </>
  );
};

export default CatItemView;
