describe('UI Test', () => {
  it('Deve clicar no botão sem usar o ID dinâmico', () => {
    cy.visit('/dynamicid')

    cy.contains('button', 'Button with Dynamic ID')
      .should('be.visible')
      .click()
      .should('have.text', 'Button with Dynamic ID')
  })

  it.only('Deve exibir alerta ao clicar no botão primário', () => {
    cy.visit('/classattr')

    cy.on('window:alert', cy.stub().as('alert'))
    cy.get('.btn-primary').click()
    cy.get('@alert')
      .should('have.been.calledWith', 'Primary button pressed')
  })

})