import Card from './Card'

it('contains checkbox', () => {
  cy.mount(<Card />)
  cy.get("[data-testid^='card']")
    .find('input')
    .should('have.length', 1)
    .and('have.attr', 'type', 'checkbox')
})

it('contains label for checkbox', () => {
  cy.mount(<Card />)
  cy.get("[data-testid^='card']")
    .find('label')
    .should('have.length', 1)
    .and('have.attr', 'for', 'todoCheck')
})
