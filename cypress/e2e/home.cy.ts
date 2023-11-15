describe('visiting the welcome page', () => {
  it('the home button is visible', () => {
    cy.visit('/')
    cy.contains('Home')
  })
})
