describe('Teste de Cadastro', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:8080/index.html')
    cy.get('#email').type('kelvin@centsaude.com')
    cy.get('#password').type('senha123')
    cy.contains('Entrar').click()
  })

  it('Deve abrir a tela de cadastro de paciente', () => {
    cy.contains('Cadastro de Paciente').click()
    cy.contains('Cadastro de Novo Paciente').should('be.visible')
    cy.get('#patientName').should('be.visible')
    cy.get('#patientCPF').should('be.visible')
  })

  it('Deve cadastrar um paciente com sucesso', () => {
    cy.contains('Cadastro de Paciente').click()
    cy.get('#patientName').type('João Silva Santos')
    cy.get('#patientCPF').type('12345678900')
    cy.get('#patientBirth').type('1990-05-15')
    cy.get('#patientPhone').type('47999887766')
    cy.get('#patientEmail').type('joao.silva@email.com')
    cy.get('#patientGender').select('M')
    cy.contains('Cadastrar Paciente').click()
    cy.contains('Paciente cadastrado com sucesso!').should('be.visible')
  })

})