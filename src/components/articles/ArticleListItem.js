import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral'

//moment.locale('de'); // Problem mit WEBPACK lässt denn Test nicht zu ...

const ArticleListItem = ({ 
  id, nameDe, nameEn, descriptionDe, descriptionEn,
   manufacturer, price, priceType }) => (
  <Link className="list-item" to={`/edit-article/${id}`}>
    <div>
      <h3 className="list-item__title">{nameDe}</h3>
      <span className="list-item__sub-title">{descriptionDe}</span>
    </div>
    <h3  className="list-item__data">
      {(price/100).toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})}
    </h3>
  </Link>
);

export default ArticleListItem;