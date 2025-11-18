describe('Teste de Login - CentSaude', () => {
  
  it('Deve abrir a tela de login corretamente', () => {
    cy.visit('http://localhost:8080/index.html')
    cy.contains('CentSaude').should('be.visible')
    cy.contains('Seja Bem-vindo!').should('be.visible')
    cy.get('#email').should('be.visible')
    cy.get('#password').should('be.visible')
  })

  it('Deve fazer login e acessar o dashboard', () => {
    cy.visit('http://localhost:8080/index.html')
    cy.get('#email').type('kelvin@centsaude.com')
    cy.get('#password').type('senha123')
    cy.contains('Entrar').click()
    cy.contains('Olá, Bem-vindo ao CentSaude!').should('be.visible')
    cy.contains('Cadastro de Paciente').should('be.visible')
  })

})