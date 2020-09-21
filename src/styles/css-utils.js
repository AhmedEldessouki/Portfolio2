/* eslint-disable import/prefer-default-export */
/* Variables and functions specifically for CSS-in-JS use */

/* Media queries */
const breakpoints = [320, 480, 900, 1220]
const names = [`xs`, `s`, `phoneLarge`, `desktop`]

export const mediaQueries = breakpoints.reduce((acc, bp, i) => {
  acc[names[i]] = `@media (max-width: ${bp}px)`
  return acc
}, {})

export const jsBreakpoints = breakpoints.reduce((acc, bp, i) => {
  acc[names[i]] = bp
  return acc
}, {})

/* Fonts */
export const fonts = {
  serif: `'Canela', serif`,
  sans: `'NB International Pro', sans-serif`,
  mono: `'NB International Pro Mono', monospace`,
}

export const weights = {
  thin: `100`,
  light: `300`,
  regular: `400`,
  medium: `500`,
  bold: `700`,
  black: `900`,
}

/* Colors - Use a RGB to HEX converter */
export const colors = {
  white: `#fff`,
  whiteFaded: `rgba(255, 255, 255, 0.7)`,
  aliceLightBlue: `#E9F1F7`,
  lightgray: `#F8F8F9;`,
  gray: `#e0e0e0`,
  black: `#000`,
  darkgray: `#29292a`,
  darkgrayFaded: `rgba(41, 41, 42, 0.7)`,
  darkergrayFaded: `rgba(41, 41, 42, 0.9)`,
  reallydarkgray: `#282829;`,
  viridianGreen: `#119DA4`,
  lightblue: `#a5e6ec`,
  drupalBlue: '#29A8DF',
  blueGreen: '#2F97C1',
  kindaBlue: `#337ab7`,
  kindaDarkBlue: `#23527c`,
  independenceBlue: `#3A405A`,
  red: `tomato`,
  burgundyRed: '#890620',
  gatsbyPurple: '#663399',
}
