import React from 'react';
import { Link } from 'react-router-dom';

// moment.locale('de'); // Problem mit WEBPACK lässt denn Test nicht zu ...

const ArticleListItem = ({
  id, nameDe, nameEn, descriptionDe, descriptionEn,
  manufacturer, price, priceType 
}) => (
  <Link className="list-item" to={`/edit-article/${id}`}>
    <div>
      <div className="list-item__title">{nameDe}</div>
      <div className="list-item__title-en">{nameEn}</div>
      <span className="list-item__sub-title">{descriptionDe}</span><br />
      <span className="list-item__sub-title-en">{descriptionEn}</span>
    </div>
    <h3 className="list-item__data">
      {(parseFloat(price) * 0.01).toLocaleString('de', { style: 'currency', currency: 'EUR' })}
    </h3>
  </Link>
);

// {(price/100).toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})}

export default ArticleListItem;
