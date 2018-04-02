import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import ArticleList from '../components/articles/ArticleList'
import NotFoundPage from '../components/NotFoundPage';
import ArticleDashboardPage from '../components/articles/ArticleDashboardPage';
import ArticleAddPage from '../components/articles/ArticleAddPage'
import ArticleEditPage from '../components/articles/ArticleEditPage'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/articles" component={ArticleDashboardPage} />
        <PrivateRoute path="/add-article" component={ArticleAddPage} />
        <PrivateRoute path="/edit-article/:id" component={ArticleEditPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
