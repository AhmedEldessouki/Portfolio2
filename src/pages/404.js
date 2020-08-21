import React from 'react';

import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout
    headerData={{
      title: '404',
      description: 'Destination not found',
      height: '400px',
      tittleMarginBottom: '88px',
      mobileMinHeight: '100px',
      children: <h1> Shit just hit the fan </h1>,
    }}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
