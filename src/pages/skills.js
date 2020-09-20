/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import {css} from '@emotion/core'

import Layout from '../components/layout'
import FakeButton from '../components/Button'
import {weights} from '../styles'

const skills = () => {
  const wrapper = css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
    margin: 20px 0;
    padding: 0 20px;
    width: 100%;
  `
  const skillSet = [
    {name: 'React', color: 'ReactColor'},
    {name: 'React', color: 'ReactColor'},
    {name: 'React', color: 'ReactColor'},
    {name: 'React', color: 'ReactColor'},
    {name: 'React', color: 'ReactColor'},
    {name: 'React', color: 'ReactColor'},
    {name: 'React', color: 'ReactColor'},
    {name: 'React', color: 'ReactColor'},
    {name: 'React', color: 'ReactColor'},
    {name: 'React', color: 'ReactColor'},
    {name: 'React', color: 'ReactColor'},
    {name: 'React', color: 'ReactColor'},
  ]
  return (
    <Layout
      headerData={{
        title: 'My Skills',
        height: '400px',
        tittleMarginBottom: '88px',
        tittlePadding: '20px 50px',
        children: <h2>All those skill are self-taught.</h2>,
      }}
    >
      <h1
        css={css`
          margin: 25px;
          font-weight: ${weights.bold};
        `}
      >
        Working with:
      </h1>
      <section css={wrapper}>
        {skillSet.map(({name}) => (
          <FakeButton>{name}</FakeButton>
        ))}
      </section>
    </Layout>
  )
}

export default skills
