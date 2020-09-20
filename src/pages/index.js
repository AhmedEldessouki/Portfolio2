import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout
    headerData={{
      title: 'Welcome To Home Page',
      height: '400px',
      tittleMarginBottom: '88px',
      tittlePadding: '20px 40px',
      children: <h2>This is the Landing Page</h2>,
    }}
  >
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <br />
    <Link to="/about/">ABOUT</Link>
    <br />
  </Layout>
)

export default IndexPage
