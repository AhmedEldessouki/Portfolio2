import React from 'react';

import Layout from '../components/layout';

const skills = () => {
  return (
    <Layout
      headerData={{
        title: 'My Skills',
        height: '400px',
        tittleMarginBottom: '88px',
        tittlePadding: '20px 50px',
        children: <h2>All those skill are self-taught.</h2>,
      }}>
      <h1>this is skills</h1>
    </Layout>
  );
};

export default skills;
