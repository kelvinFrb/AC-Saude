describe('Login no CentSaude', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('index.html');

    // Preenche email e senha
    cy.get('#email').type('teste@teste.com');
    cy.get('#password').type('123456');

    // Clica no botão Entrar
    cy.contains('button', 'Entrar').click();

    // Verifica se o dashboard apareceu
    cy.contains('Olá, Bem-vindo ao CentSaude! 👋').should('be.visible');
  });
});
