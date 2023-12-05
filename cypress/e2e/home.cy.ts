describe('visiting the welcome page', () => {
  it('the home button is visible', () => {
    cy.visit('/')
    cy.get('h1').should('contain.text', 'Home')
  })

  it('from another page works for logo button', () => {
    cy.visit('/history')
    cy.get('a').contains('Home').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })
    cy.get('h1').should('contain.text', 'Home')
  })

  it('from another page works for home button', () => {
    cy.visit('/history')
    cy.get('img').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })
    cy.get('h1').should('contain.text', 'Home')
  })
})
