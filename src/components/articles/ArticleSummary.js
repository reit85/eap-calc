import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { isNumber } from 'util';
import selectArticles from '../../selectors/articles'
// import selectExpensesTotal from '../selectors/expenses-total'

export const ArticleSummary = ({articlesCount}) => {
  const count = isNumber(articlesCount) ? articlesCount : 0
  const word = articlesCount == 1 ? 'Artikel' : 'Artikel'
  return(
    <div className="page-header">
      <div className="container">
        <h3 className="page-header__title"><span>{count}</span> {word}.</h3>
        <div className="page-header__actions">
          <Link className="button" to="/add-article">Neuer Artikel</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleArticles = selectArticles(state.articles, state.filters)
  return {
    articlesCount: visibleArticles.length,
  }
}
 
export default connect(mapStateToProps)(ArticleSummary)