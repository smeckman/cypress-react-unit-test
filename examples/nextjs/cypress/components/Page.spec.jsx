import * as React from 'react'
import IndexPage from '../../pages/index'
import { mount } from 'cypress-react-unit-test'

describe('NextJS page', () => {
  it('Renders page component', () => {
    mount(<IndexPage />)

    cy.contains('Welcome to Next.js')
  })
})
