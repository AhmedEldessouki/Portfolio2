/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout
    headerData={{
      height: 'calc(100vh - 200px)',
      mobileMinHeight: '93vh',
    }}>
    <SEO title='404: Not found' />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <button type='button' onClick={() => navigate('/')}>
      Home
    </button>
  </Layout>
);

export default NotFoundPage;
