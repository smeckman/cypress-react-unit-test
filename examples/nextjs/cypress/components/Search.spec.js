import { mount } from 'cypress-react-unit-test'
import { Search } from '../components/Search'

describe('<Search />', () => {
  it('Renders component', () => {
    mount(<Search />)

    cy.find('input').type('124152')
  })
})
