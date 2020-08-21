import React from 'react';

import Layout from '../components/layout';

const projects = () => {
  return (
    <Layout
      headerData={{
        title: 'Projects Made Using',
        tittleMarginBottom: '52px',
        tittlePadding: '20px 50px',
        children: <h2>React, Gatsby, Angular, JS, HTML, & CSS.</h2>,
      }}
    />
  );
};

export default projects;
