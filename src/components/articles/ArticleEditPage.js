import React from 'react';
import { connect } from 'react-redux';
import ArticleForm from './ArticleForm';
import { startEditArticle, startRemoveArticle } from '../../actions/articles';

export class ArticleEditPage extends React.Component {
  onSubmit = (article) => {
    this.props.startEditArticle(this.props.article.id, article);
    this.props.history.push('/articles');
  }

  onRemove = () => {
    this.props.startRemoveArticle({ id: this.props.article.id });
    this.props.history.push('/articles');
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">Artikel bearbeiten</h1>
          </div>
        </div>
        <div className="container">
          <ArticleForm
            article={this.props.article}
            onSubmit={this.onSubmit}
          />
          <button
            className="button button--secondary"
            onClick={this.onRemove}
          >
            Löschen
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  article: state.articles.find(article => article.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  startEditArticle: (id, article) => dispatch(startEditArticle(id, article)),
  startRemoveArticle: data => dispatch(startRemoveArticle(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditPage);
