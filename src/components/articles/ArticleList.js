import React from 'react';
import { connect } from 'react-redux';
import ArticleListItem from './ArticleListItem';
import selectArticles from '../../selectors/articles';

export const ArticleList = props => (
  <div className="container">
    <div className="list-header">
      <div className="show-for-mobile">Artikel</div>
      <div className="show-for-desktop">Artikel</div>
      <div className="show-for-desktop">Preis</div>
    </div>
    <div className="list-body">
      {
        props.articles.length === 0 ? (
          <div className="list-item list-item--message">
            <span> Keine Artikel vorhanden.</span>
          </div>
        ) : (
          props.articles.map((artikel) => {
            return <ArticleListItem key={artikel.id} {...artikel} />;
          })
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    articles: selectArticles(state.articles, state.filters)
  };
};

export default connect(mapStateToProps)(ArticleList);
