describe('visiting the history page', () => {
  it('the history is visible', () => {
    cy.visit('/history')
    cy.get('h1').should('contain.text', 'History')
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/history')
    })
  })
})
