import React from 'react'
import {css} from '@emotion/core'

export default () => {
  const footerContainer = css`
    display: block;
    position: relative;
    bottom: 0;
    right: 0;
    left: 0;
    text-align: right;
    padding: 10px 20px;
  `
  return (
    <div css={footerContainer}>
      <span>Ahmed ElDessouki © 2020</span>
    </div>
  )
}
