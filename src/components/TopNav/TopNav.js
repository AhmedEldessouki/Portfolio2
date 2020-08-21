/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import { Link } from 'gatsby';

import { colors } from '../../styles';

export default () => {
  const container = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 88px;
    width: 100%;
    background: ${colors.darkergrayFaded};
  `;

  const forLink = css`
    color: ${colors.lightgray};
    padding: 20px 50px;
    letter-spacing: 1px;
  `;

  return (
    <nav css={container}>
      <Link
        to='/'
        css={forLink}
        activeStyle={{
          background: colors.darkgray,
          color: colors.whiteFaded,
        }}>
        Home
      </Link>
      <Link
        to='/skills/'
        css={forLink}
        activeStyle={{
          background: colors.darkgray,
          color: colors.whiteFaded,
        }}>
        Skills
      </Link>
      <Link
        to='/projects/'
        css={forLink}
        activeStyle={{
          background: colors.darkgray,
          color: colors.whiteFaded,
        }}>
        Projects
      </Link>
      <Link
        to='/about/'
        css={forLink}
        activeStyle={{
          background: colors.darkgray,
          color: colors.whiteFaded,
        }}>
        About
      </Link>
    </nav>
  );
};
