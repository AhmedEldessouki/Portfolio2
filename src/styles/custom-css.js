/* eslint-disable import/prefer-default-export */

// Styles that are more specific than the element level, but that we still want
// to reuse across multiple components. Basically things that would be regular
// CSS classes in a non-JS-based theme.
import {css} from '@emotion/core'

import {fonts, colors, weights, mediaQueries} from './css-utils'

export const btnStyles = css`
  position: relative;
  padding: 0;
  border: 1px solid ${colors.aliceLightBlue};
  border-radius: 10%;
  outline: none;
  font-family: ${fonts.sans};
  font-weight: ${weights.bold};
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 2px;
  background: transparent;
  color: ${colors.darkgray};
  cursor: pointer;

  span {
    display: block;
    position: relative;
    padding: 8px 28px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      to bottom,
      ${colors.darkgray},
      ${colors.darkgray} 50%,
      ${colors.white} 50%
    );
    background-size: 100% 200%;
    background-position: top;
    transition: all 0.3s ease;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    transition: 0.3s ease height;
    background: ${colors.independenceBlue};
  }
  &:hover,
  &:focus {
    transition: all 0.3s ease;

    span {
      background-position: bottom;
    }

    &::before {
      height: 100%;
    }
  }
`

// Heading modifications
export const h1Xl = css`
  margin-bottom: 10px;
  font-size: 100px;
  line-height: 1.23;
  font-weight: ${weights.black};
  letter-spacing: 0.52px;

  ${mediaQueries.phoneLarge} {
    margin-bottom: 20px;
    font-size: 100px;
    line-height: 1;
    letter-spacing: 1.33px;
  }
`

export const h1L = css`
  font-size: 60px;
  font-weight: ${weights.medium};
  line-height: 1.23;
  letter-spacing: -0.45px;
  text-align: center;

  ${mediaQueries.desktop} {
    font-size: calc(60px * 0.8);
    line-height: 1.16;
    letter-spacing: 0;
  }
  ${mediaQueries.phoneLarge} {
    font-size: calc(60px * 0.55);
    line-height: 1.16;
    letter-spacing: 0;
  }
  ${mediaQueries.s} {
    font-size: calc(60px * 0.4);
  }
  ${mediaQueries.xs} {
    font-size: calc(60px * 0.3);
    width: 95%;
  }
`

export const smSectionHead = css`
  margin-bottom: 0;
  font-size: 21px;
  font-weight: ${weights.thin};
  letter-spacing: 0.23px;
  line-height: 3.62;
  color: ${colors.reallydarkgray};

  ${mediaQueries.phoneLarge} {
    margin-bottom: 30px;
    font-size: 36px;
    line-height: 2;
    letter-spacing: 0.4px;
  }
`

export const contentH2 = css`
  margin-top: 25px;
  margin-bottom: 10px;
  font-family: ${fonts.sans};
  font-size: 21px;
  font-weight: ${weights.bold};
  line-height: 1.4;
`

export const contentHeadings = css`
  font-family: ${fonts.sans};
  font-size: 16px;
  font-weight: ${weights.bold};
  letter-spacing: 0.2px;
  line-height: 1.69;
  margin-bottom: 30px;
`

export const dropCap = css`
  & > p:first-of-type::first-letter {
    float: left;
    padding: 10px 20px 0;
    color: ${colors.reallydarkgray};
    font-family: ${fonts.serif};
    font-size: 50px;
    font-weight: ${weights.regular};
    line-height: 0.75;

    ${mediaQueries.phoneLarge} {
      padding: 6px 18px 0;
    }
  }
`

export const pLight = css`
   {
    color: ${colors.reallydarkgray};
    font-family: ${fonts.sans};
    font-size: 16px;
    font-weight: ${weights.light};
    letter-spacing: 0.2px;
    line-height: 1.69;
    text-align: center;
  }
`

export const list = css`
  padding: 50px 20px;

  ${mediaQueries.phoneLarge} {
    padding: 110px 0;
  }
  h4 {
    font-family: ${fonts.sans};
    font-size: 18px;
    font-weight: ${weights.bold};
    line-height: 1.39;
    margin-bottom: 12px;
  }
  p {
    font-weight: ${weights.light};
  }
  div {
    ${mediaQueries.phoneLarge} {
      display: flex;
      justify-content: space-between;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: ${fonts.sans};
    font-weight: ${weights.bold};
    list-style: none;
    line-height: 1.5;

    li {
      margin-bottom: 10px;
      padding-left: 0;

      &:before {
        content: '—';
        padding-right: 2px;
      }
    }
  }
`
