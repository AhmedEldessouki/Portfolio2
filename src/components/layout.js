import React from 'react'
import PropTypes from 'prop-types'
import {Global} from '@emotion/core'

import {globalStyles} from '../styles'

import Header from './Header'
import {headerPropTypes} from './Header/header'
import Footer from './Footer'

import '../styles/layout.css'

const Layout = ({children, headerData}) => (
  <div>
    <Global styles={globalStyles} />
    <Header {...headerData} />
    <main>{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerData: PropTypes.shape(headerPropTypes),
}

Layout.defaultProps = {
  headerData: {},
}

export default Layout
