/* eslint-disable no-bitwise */
import PropTypes from 'prop-types'
import React from 'react'
import {css} from '@emotion/core'

import SEO from '../seo'
import {colors, weights, mediaQueries, fonts} from '../../styles'
import FullWidth from '../FullWidth'
import TopNav from '../TopNav'

/**
 * Header for every page
 *
 * @param {string} title - passed through to SEO
 * @param {string} metaTitle - passed through to SEO
 * @param {string} description - passed through to SEO
 * @param {string} image - passed through to SEO
 * @param {string} color - passed to background color
 * @param {string} tittleMarginBottom - passed to tittle
 * @param {string} tittlePadding - passed to tittle
 * @param {string} height - passed to wrapper component
 * @param {string} mobileMinHeight - passed to wrapper component
 * @param {node} children
 * @param {bool} invert - this will be used to invert fontColor
 */

const Header = ({
  title,
  metaTitle,
  description,
  image,
  color,
  tittleMarginBottom,
  tittlePadding,
  height,
  mobileMinHeight,
  children,
  invert,
}) => {
  const isLightBackground = value => {
    let r, g, b

    if (value.match(/^rgb/)) {
      // if HEX, store the Red, Green, abd Blue values in separate variables
      ;[r, g, b] = value.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
      )
    } else {
      // if RGB, convert it to HEX
      // @see: http://gist.github.com/983661
      const rgbVal = +`0x${value
        .slice(1)
        .replace(value.length < 5 && /./g, '$&$&')}`
      r = rgbVal >> 16
      g = rgbVal & 255
      b = (rgbVal >> 8) & 255
    }
    return (
      Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b)) > 127.5
    )
  }

  const fontColor =
    isLightBackground(color) && !invert ? colors.darkgray : colors.lightgray

  const headerTitle = css`
    @keyframes headerSlider {
      0% {
        transform: translateY(25%);
      }
      100% {
        transform: translateY(0);
      }
    }

    @keyframes afterReveal {
      0% {
        height: 100%;
      }
      100% {
        height: 0;
      }
    }

    position: relative;
    margin-bottom: ${tittleMarginBottom};
    padding: ${tittlePadding};
    line-height: 1.23;
    font-size: 72px;
    font-weight: ${weights.medium};
    letter-spacing: -0.45px;
    text-align: center;
    font-family: ${fonts.serif};
    font-weight: ${weights.bold};
    color: ${fontColor};
    transform: translateY(25%);
    animation-name: headerSlider;
    animation-duration: 0.7s;
    animation-timing-function: ease-out;
    animation-iteration-count: 1;
    animation-fill-more: forwards;

    &::after {
      content: '';
      display: block;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: ${color};
      animation-name: afterReveal;
      animation-duration: inherit;
      animation-timing-function: inherit;
      animation-iteration-count: inherit;
      animation-fill-mode: inherit;
    }

    ${mediaQueries.desktop} {
      width: 80%;
      font-size: calc(50px * 0.8);
    }

    ${mediaQueries.phoneLarge} {
      margin-bottom: calc(${tittleMarginBottom} * 0.75);
      padding: calc(${tittlePadding} * 0.8);
      line-height: 1.17;
      letter-spacing: -1px;
      width: 95%;
    }

    ${mediaQueries.s} {
      margin-bottom: calc(${tittleMarginBottom} % 2);
      width: 100%;
      padding: calc(${tittlePadding} * 0.7);
      font-size: calc(50px * 0.5);
    }

    ${mediaQueries.xs} {
    }
  `
  const sectionCss = css`
    background-color: ${color};
    color: ${fontColor};
  `

  return (
    <div>
      <SEO title={metaTitle || title} description={description} image={image} />
      <TopNav />
      <FullWidth
        css={sectionCss}
        height={height}
        minHeight={mobileMinHeight}
        padding={tittlePadding}
      >
        {title && (
          <h1 data-cy="titleText" css={[headerTitle]}>
            {title}
          </h1>
        )}
        {(children && children) || null}
      </FullWidth>
    </div>
  )
}
export const headerPropTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  metaTitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
  tittleMarginBottom: PropTypes.string,
  tittlePadding: PropTypes.string,
  height: PropTypes.string,
  mobileMinHeight: PropTypes.string,
  children: PropTypes.node,
  invert: PropTypes.bool,
}

Header.propTypes = headerPropTypes

Header.defaultProps = {
  title: null,
  metaTitle: null,
  description: null,
  image: null,
  color: colors.independenceBlue,
  tittleMarginBottom: '0',
  tittlePadding: '0 20px',
  height: '700px',
  mobileMinHeight: '300px',
  children: null,
  invert: false,
}

export default Header
