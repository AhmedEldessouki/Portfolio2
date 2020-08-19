/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';

import { globalStyles } from '../styles';

import Header, { headerPropTypes } from './Header/Header';
// import Footer from './Footer';

import '../styles/layout.css';

const Layout = ({ children, headerData }) => (
  <>
    <Global styles={globalStyles} />
    <Header {...headerData} />
    <main>{children}</main>
    {/* <Footer /> */}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerData: PropTypes.shape(headerPropTypes),
};

Layout.defaultProps = {
  headerData: {},
};

export default Layout;
