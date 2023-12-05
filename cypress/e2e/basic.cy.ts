describe('basic tests', () => {
  it('visiting a not supported route shows error page', () => {
    cy.visit('/not/supported/route')
    cy.contains('Oops!')
    cy.contains('No route matches URL "/not/supported/route"')
  })
})
