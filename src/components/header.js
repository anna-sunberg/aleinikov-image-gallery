import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav>
      <ul className="nav" role="menu">
        <li role="menu-item">
          <Link to="/">Главная</Link>
        </li>
        <li role="menu-item">
          <Link to="/about">Об авторе</Link>
        </li>
      </ul>
      <div className="site-title">
        <h1>{siteTitle}</h1>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
