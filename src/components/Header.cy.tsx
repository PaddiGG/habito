import Header from './Header'

it('header has elements', () => {
  cy.mount(<Header />)
  cy.get('button').first().should('have.text', 'Logo')
  cy.get('button').eq(1).should('have.text', 'Home')
  cy.get('button').last().should('have.text', 'History')
})
