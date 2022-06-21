import React from 'react';

const CatBlockView = ({cats}) => {
    return (
        <>
            <header className="feed-cat-header">
                <h1 className="cat-header__heading">Ты сегодня покормил кота?</h1>
            </header>
        <main className="block-wrapper layout-three-column">
            {cats?.map(({id, description, title, amount, present}) => (
                <div key={id} className="cat-block">
                    <div className="cat-description">
                        <h4>{description}</h4>
                    </div>
                    <div className="cat-title">
                        <h4>{title}</h4>
                    </div>
                    <div className="cat-food-amount">
                        <span className="amount">{amount} порций</span>
                        <span>{present}</span>
                    </div>
                </div>
            ))}
        </main>
        </>
    );
};

export default CatBlockView;