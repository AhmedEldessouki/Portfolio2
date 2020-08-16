import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/core';

import GlobalStyles from '../../styles/globalStyles';

const Header = ({ siteTitle }) => (
  <header
    css={css`
      background: black;
      margin-bottom: 1.45rem;
    `}>
    <div
      css={css`
        margin: 0 auto;
        maxwidth: 960px;
        padding: 1.45rem 1.0875rem;
      `}>
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
