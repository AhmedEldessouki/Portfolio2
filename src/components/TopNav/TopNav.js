/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */

import {jsx, css} from '@emotion/core'
import {Link} from 'gatsby'

import {colors, weights} from '../../styles'

function TopNav() {
  const container = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 88px;
    width: 100%;
  `

  const forLink = css`
    color: ${colors.whiteFaded};
    padding: 20px 50px;
    letter-spacing: 1px;
    font-weight: ${weights.bold};
  `

  return (
    <nav css={container}>
      <Link
        to="/"
        css={forLink}
        activeStyle={{
          background: colors.independenceBlue,
          color: colors.aliceLightBlue,
        }}
      >
        Home
      </Link>
      <Link
        to="/skills/"
        css={forLink}
        activeStyle={{
          background: colors.independenceBlue,
          color: colors.aliceLightBlue,
        }}
      >
        Skills
      </Link>
      <Link
        to="/projects/"
        css={forLink}
        activeStyle={{
          background: colors.independenceBlue,
          color: colors.aliceLightBlue,
        }}
      >
        Projects
      </Link>
      <Link
        to="/about/"
        css={forLink}
        activeStyle={{
          background: colors.independenceBlue,
          color: colors.aliceLightBlue,
        }}
      >
        About
      </Link>
    </nav>
  )
}

export default TopNav
