// example comes from https://github.com/ReactTraining/react-router/blob/dev/docs/guides/getting-started.md
/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { App } from './app.jsx'
import { MemoryRouter } from 'react-router-dom'

it('navigates through the link without changing url', () => {
  cy.viewport(600, 300)
  mount(
    <MemoryRouter
      initialEntries={['/about', '/two', { pathname: '/three' }]}
      initialIndex={0}
    >
      <App />
    </MemoryRouter>,
  )

  // we are mocking the initial open route with `initialIndex`
  cy.contains('h2', 'About')

  // Go to home route
  cy.contains('a', 'Home').click()

  cy.contains('h2', 'Home')
  cy.location('pathname').should('not.equal', '/')

  // Go to about route
  cy.contains('a', 'About').click()

  cy.contains('h2', 'About')
  cy.location('pathname').should('not.equal', '/about')
})
