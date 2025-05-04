describe('UI Test', () => {
  it('Deve clicar no botão sem usar o ID dinâmico', () => {
    cy.visit('/dynamicid')

    cy.contains('button', 'Button with Dynamic ID')
      .should('be.visible')
      .click()
      .should('have.text', 'Button with Dynamic ID')
  })

})