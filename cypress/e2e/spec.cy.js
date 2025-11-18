describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
});

it('teste', function() {
  describe('CT-001 - Testes de Autenticação', () => {
    
    beforeEach(() => {
      cy.visit('index.html')
    })
  
    it('Deve exibir a tela de login corretamente', () => {
      cy.contains('CentSaude').should('be.visible')
      cy.get('input[type="email"]').should('be.visible')
      cy.get('input[type="password"]').should('be.visible')
      cy.contains('Entrar').should('be.visible')
    })
  
    it('Deve realizar login com credenciais válidas', () => {
      cy.get('input[type="email"]').type('kelvin@centsaude.com')
      cy.get('input[type="password"]').type('senha123')
      cy.contains('Entrar').click()
      
      cy.url().should('include', 'dashboard')
      cy.contains('Bem-vindo').should('be.visible')
    })
  
    it('Deve validar campo de email obrigatório', () => {
      cy.get('input[type="password"]').type('senha123')
      cy.contains('Entrar').click()
      
      cy.get('input[type="email"]:invalid').should('exist')
    })
  
    it('Deve validar formato de email', () => {
      cy.get('input[type="email"]').type('emailinvalido')
      cy.get('input[type="password"]').type('senha123')
      cy.contains('Entrar').click()
      
      cy.get('input[type="email"]:invalid').should('exist')
    })
  
    it('Deve validar campo de senha obrigatório', () => {
      cy.get('input[type="email"]').type('kelvin@centsaude.com')
      cy.contains('Entrar').click()
      
      cy.get('input[type="password"]:invalid').should('exist')
    })
  
    it('Deve exibir mensagem de erro para credenciais inválidas', () => {
      cy.get('input[type="email"]').type('usuario@errado.com')
      cy.get('input[type="password"]').type('senhaerrada')
      cy.contains('Entrar').click()
      
      cy.contains('Email ou senha inválidos').should('be.visible')
    })
  
    it('Deve limpar os campos do formulário', () => {
      cy.get('input[type="email"]').type('teste@email.com')
      cy.get('input[type="password"]').type('teste123')
      
      cy.get('input[type="email"]').clear()
      cy.get('input[type="password"]').clear()
      
      cy.get('input[type="email"]').should('have.value', '')
      cy.get('input[type="password"]').should('have.value', '')
    })
  
    it('Deve ter o campo de senha mascarado', () => {
      describe('CT-001 - Testes de Autenticação', () => {
        
        beforeEach(() => {
          cy.visit('http://localhost:8080/index.html')
        })
      
        it('Deve exibir a tela de login corretamente', () => {
          cy.contains('CentSaude').should('be.visible')
          cy.get('input[type="email"]').should('be.visible')
          cy.get('input[type="password"]').should('be.visible')
          cy.contains('Entrar').should('be.visible')
        })
      
        it('Deve realizar login com credenciais válidas', () => {
          cy.get('input[type="email"]').type('kelvin@centsaude.com')
          cy.get('input[type="password"]').type('senha123')
          cy.contains('Entrar').click()
          
          cy.url().should('include', 'dashboard')
          cy.contains('Bem-vindo').should('be.visible')
        })
      
        it('Deve validar campo de email obrigatório', () => {
          cy.get('input[type="password"]').type('senha123')
          cy.contains('Entrar').click()
          
          cy.get('input[type="email"]:invalid').should('exist')
        })
      
        it('Deve validar formato de email', () => {
          cy.get('input[type="email"]').type('emailinvalido')
          cy.get('input[type="password"]').type('senha123')
          cy.contains('Entrar').click()
          
          cy.get('input[type="email"]:invalid').should('exist')
        })
      
        it('Deve validar campo de senha obrigatório', () => {
          cy.get('input[type="email"]').type('kelvin@centsaude.com')
          cy.contains('Entrar').click()
          
          cy.get('input[type="password"]:invalid').should('exist')
        })
      
        it('Deve exibir mensagem de erro para credenciais inválidas', () => {
          cy.get('input[type="email"]').type('usuario@errado.com')
          cy.get('input[type="password"]').type('senhaerrada')
          cy.contains('Entrar').click()
          
          cy.contains('Email ou senha inválidos').should('be.visible')
        })
      
        it('Deve limpar os campos do formulário', () => {
          cy.get('input[type="email"]').type('teste@email.com')
          cy.get('input[type="password"]').type('teste123')
          
          cy.get('input[type="email"]').clear()
          cy.get('input[type="password"]').clear()
          
          cy.get('input[type="email"]').should('have.value', '')
          cy.get('input[type="password"]').should('have.value', '')
        })
      
        it('Deve ter o campo de senha mascarado', () => {
          cy.get('input[type="password"]').should('have.attr', 'type', 'password')
        })
      })
    })
  })
});