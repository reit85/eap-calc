import React from 'react';
import { Link } from 'react-router-dom';


export default () => (
  <div className="navbar">
    <div className="container">
      <div className="navbar__content">
        <Link className="nav-link" to="/components">Komponenten</Link>
        <Link className="nav-link" to="/articles">Artikel</Link>
        <Link className="nav-link" to="/components">Lieferanten</Link>
      </div>
    </div>
  </div>
);