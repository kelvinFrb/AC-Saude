/// <reference types="cypress" />

describe('Testes Funcionais - CentSaude', () => {

  beforeEach(() => {
    // Executa antes de cada teste
    cy.visit('http://localhost:3000'); // ou URL do seu sistema
  });

  it('Deve fazer login com usuário válido', () => {
    cy.get('input[name="email"]').type('usuario@teste.com');
    cy.get('input[name="senha"]').type('123456');
    cy.get('button[type="submit"]').click();
    
    // Valida se redirecionou para dashb
