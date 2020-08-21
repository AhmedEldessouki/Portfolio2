describe('my portfolio', () => {
  it('passes smoke tests', () => {
    cy.visit('/');
    cy.contains('Welcome To Home Page').should('exist');
    cy.contains(/About/i).click();
    cy.contains('Ahmed ElDessouki').should('exist');
    cy.go('back');
    cy.visit('/skills/');
    cy.contains('Skills').should('exist');
  });
});
