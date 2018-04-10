import React from 'react';
import ArticleSummary from './ArticleSummary';
import ArticleListFilter from './ArticleListFilter';
import ArticleList from './ArticleList';

const ArticleDashboardPage = () => (
  <div>
    <ArticleSummary />
    <ArticleListFilter />
    <ArticleList />
  </div>
);

export default ArticleDashboardPage;
