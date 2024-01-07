import Card from './Card'

it('card contains checkbox', () => {
  cy.mount(<Card />)
  cy.get("[data-testid^='card']")
    .find('input')
    .should('have.length', 1)
    .and('have.attr', 'type', 'checkbox')
})
