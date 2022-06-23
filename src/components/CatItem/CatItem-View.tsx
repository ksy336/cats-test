import React from 'react';

const CatItemView = ({
  id,
  description,
  title,
  type,
  amount,
  present,
  weight,
  catBlockRef,
  blurElementHandler,
  insideBlockRef,
  descriptionRef,
  titleRef,
  dotRef,
  linkRef,
  selectItemToBuy,
  disableItemRef,
  setDisableItem,
}) => {
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
