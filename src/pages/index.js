import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout
    headerData={{
      title: 'Home Page',
    }}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <br />
    <Link to='/about/'>ABOUT</Link>
    <br />
  </Layout>
);

export default IndexPage;
