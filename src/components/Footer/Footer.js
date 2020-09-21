import React from 'react'
import {css} from '@emotion/core'
import {
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Googlehangouts,
  Gatsby,
  Twitter,
} from '@icons-pack/react-simple-icons'
import {colors, mediaQueries, weights} from '../../styles'

function Footer() {
  const fWrapper = css`
    display: grid;
    padding-top: 30px;
  `
  const whereToFindMe = css`
    grid-row: 1;
    grid-column: 1 / span 2;
    place-self: start;
    padding-left: 20px;
    color: ${colors.darkBlue};
    & > a {
      padding-right: 5px;
      > * {
        background: ${colors.independenceBlue};
        padding: 8px;
        border-radius: 14%;
        :hover {
          background: ${colors.aliceLightBlue};
        }
      }
    }
    ${mediaQueries.phoneLarge} {
      grid-column: 1;
      grid-row: 1;
      place-self: center;
    }
  `
  const gatsbyIcon = css`
    grid-row: 1;
    grid-column: 3;
    place-self: center;
    svg {
      background: ${colors.independenceBlue};
      padding: 1px 6px;
      border-radius: 34%;
      :hover {
        background: ${colors.aliceLightBlue};
      }
    }
    ${mediaQueries.phoneLarge} {
      grid-column: 1;
      grid-row: 2;
      place-self: center;
      margin-top: 6px;
    }
  `
  const copyWrite = css`
    grid-row: 1;
    grid-column: 4 / span 2;
    place-self: end;
    padding-right: 20px;
    padding-bottom: 30px;
    color: ${colors.independenceBlue};
    font-size: 137%;
    font-weight: ${weights.black};
    ${mediaQueries.phoneLarge} {
      grid-column: 1;
      grid-row: 3;
      place-self: center;
    }
  `
  return (
    <footer css={fWrapper}>
      <div css={whereToFindMe}>
        <a href="https://www.linkedin.com/in/ahmedeldessouki/">
          <Linkedin title="LinkedIn" color="#0077B5" size={50} />
        </a>
        <a href="https://www.github.com/ahmedeldessouki/">
          <Github title="Repos" color="#181717" size={50} />
        </a>
        <a href="mailto: nemoahmed534@gmail.com">
          <Googlehangouts title="Mail2Add" color="#0C9D58" size={50} />
        </a>
        <a href="https://www.instagram.com/eldessouki.a">
          <Instagram title="IG" color="#E4405F " size={50} />
        </a>
        <a href="https://www.facebook.com/ahmed.eldessouki.39">
          <Facebook title="FB" color="#1877F2 " size={50} />
        </a>
        <a href="https://www.twitter.com/nem0adam">
          <Twitter title="Twitter" color="#1DA1F2 " size={50} />
        </a>
      </div>
      <div css={gatsbyIcon}>
        <Gatsby color={colors.gatsbyPurple} size={60} />
      </div>
      <div css={copyWrite}>
        <span>© 2019 Ahmed ElDessouki</span>
      </div>
    </footer>
  )
}

export default Footer
