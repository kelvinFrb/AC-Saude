describe('Login no sistema', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('index.html');

    cy.get('#email').type('usuario@email.com');
    cy.get('#senha').type('senha123');
    cy.get('button[type="submit"]').click();

    cy.contains('Bem-vindo').should('exist');
  });
});
