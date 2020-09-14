import * as React from 'react'
import * as ReactDom from 'react-dom'
import IndexPage from '../../pages/index'
import { mount } from 'cypress-react-unit-test'

describe('NextJS page', () => {
  it('Renders page component', () => {
    mount(<IndexPage />, { ReactDom })

    cy.contains('Welcome to Next.js')
  })
})
