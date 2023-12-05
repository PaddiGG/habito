import Layout from './Layout'

it('header has elements', () => {
  cy.mount(<Layout>Something</Layout>)
  cy.get('a')
    .first()
    .within(() => {
      cy.get('img').should('exist')
    })
  cy.get('a').eq(1).should('have.text', 'Home')
  cy.get('a').last().should('have.text', 'History')
  cy.contains('Something')
})
