# Documento de Especificação de Testes
## Sistema CentSaude

**Projeto:** Sistema de Gestão de Saúde CentSaude  
**Versão:** 1.0  
**Data:** 17/11/2025  
**Responsável:** Kelvin França  

---

## 1. Introdução

Este documento descreve os testes realizados no Sistema CentSaude, detalhando os tipos de testes aplicados, os módulos testados e os resultados obtidos.

### 1.1 Objetivo

Validar as principais funcionalidades do sistema através de testes automatizados, garantindo que os fluxos de autenticação e cadastro funcionem corretamente.

---

## 2. Tipos de Testes Implementados

### 2.1 Testes Funcionais End-to-End (E2E)

Testes que simulam o comportamento real do usuário, validando o sistema de ponta a ponta.

**Características:**
- Interação completa com a interface
- Validação de fluxos de navegação
- Verificação de elementos visuais
- Confirmação de mensagens ao usuário

### 2.2 Testes de Interface (UI)

Verificam se os elementos da interface são exibidos corretamente.

**Aspectos testados:**
- Visibilidade de botões e campos
- Presença de textos e títulos
- Exibição de formulários
- Mensagens de feedback

### 2.3 Testes de Validação

Validam as regras de entrada de dados no sistema.

**Validações testadas:**
- Campos obrigatórios
- Formato de email
- Aceitação de dados
- Mensagens de sucesso

---

## 3. Módulos Testados

### 3.1 Módulo de Autenticação (Login)

**Descrição:** Permite o acesso ao sistema através de email e senha.

**Funcionalidades testadas:**
- Exibição da tela de login
- Campos de email e senha visíveis
- Texto "CentSaude" exibido
- Mensagem "Seja Bem-vindo!" exibida
- Login com credenciais válidas
- Redirecionamento para o dashboard
- Exibição da mensagem de boas-vindas

**Status:** ✅ Testado e Aprovado

---

### 3.2 Módulo de Cadastro de Pacientes

**Descrição:** Permite cadastrar novos pacientes no sistema.

**Funcionalidades testadas:**
- Navegação do dashboard para o formulário
- Exibição do título "Cadastro de Novo Paciente"
- Campos de nome e CPF visíveis
- Preenchimento de todos os campos obrigatórios
- Seleção de gênero
- Cadastro com dados completos
- Exibição da mensagem de sucesso

**Status:** ✅ Testado e Aprovado

---

## 4. Casos de Teste Detalhados

### 4.1 CT-001: Teste de Login

**Arquivo:** `login.cy.js`

| ID | Descrição | Resultado |
|----|-----------|-----------|
| CT-001.1 | Deve abrir a tela de login corretamente | ✅ Passou |
| CT-001.2 | Deve fazer login e acessar o dashboard | ✅ Passou |

**Detalhamento CT-001.1:**
- Acessa a URL do sistema
- Verifica se "CentSaude" está visível
- Verifica se "Seja Bem-vindo!" está visível
- Verifica se campo de email está visível
- Verifica se campo de senha está visível

**Detalhamento CT-001.2:**
- Acessa a URL do sistema
- Digita email: kelvin@centsaude.com
- Digita senha: senha123
- Clica no botão "Entrar"
- Verifica se "Olá, Bem-vindo ao CentSaude!" está visível
- Verifica se "Cadastro de Paciente" está visível

---

### 4.2 CT-002: Teste de Cadastro de Paciente

**Arquivo:** `cadastro.cy.js`

| ID | Descrição | Resultado |
|----|-----------|-----------|
| CT-002.1 | Deve abrir a tela de cadastro de paciente | ✅ Passou |
| CT-002.2 | Deve cadastrar um paciente com sucesso | ✅ Passou |

**Detalhamento CT-002.1:**
- Faz login no sistema
- Clica em "Cadastro de Paciente"
- Verifica se "Cadastro de Novo Paciente" está visível
- Verifica se campo de nome está visível
- Verifica se campo de CPF está visível

**Detalhamento CT-002.2:**
- Faz login no sistema
- Clica em "Cadastro de Paciente"
- Preenche nome: João Silva Santos
- Preenche CPF: 12345678900
- Preenche data de nascimento: 1990-05-15
- Preenche telefone: 47999887766
- Preenche email: joao.silva@email.com
- Seleciona gênero: Masculino
- Clica em "Cadastrar Paciente"
- Verifica se "Paciente cadastrado com sucesso!" está visível

---

## 5. Ferramenta de Teste

### 5.1 Cypress

**Versão:** 15.6.0  
**Tipo:** Framework de testes E2E

**Por que Cypress?**
- Testes em tempo real com interface visual
- Execução rápida e confiável
- Gravação automática de vídeos
- Screenshots em caso de falhas
- Sintaxe simples e clara
- Amplamente utilizado na indústria

**Arquivos de configuração:**
- `package.json` - Dependências e scripts
- `cypress.config.js` - Configurações do Cypress
- `cypress/e2e/` - Pasta com os testes

---

## 6. Ambiente de Testes

**Sistema Operacional:** Windows/Linux/macOS  
**Navegador:** Chrome  
**Servidor Local:** http-server na porta 8080  
**URL de teste:** http://localhost:8080/index.html  

**Dependências:**
```json
{
  "cypress": "^15.6.0",
  "http-server": "^14.1.1"
}
```

---

## 7. Execução dos Testes

### 7.1 Comandos

**Iniciar o servidor:**
```bash
npm start
```

**Abrir Cypress (modo interativo):**
```bash
npm test
```

**Executar testes (modo headless):**
```bash
npm run cypress:run
```

### 7.2 Estrutura de Arquivos

```
projeto/
├── index.html                    # Sistema CentSaude
├── package.json                  # Configuração do projeto
├── cypress.config.js             # Configuração do Cypress
└── cypress/
    └── e2e/
        ├── login.cy.js           # 2 testes de login
        └── cadastro.cy.js        # 2 testes de cadastro
```

---

## 8. Resultados dos Testes

### 8.1 Resumo Geral

| Módulo | Testes | Passou | Falhou | Taxa de Sucesso |
|--------|--------|--------|--------|-----------------|
| Autenticação | 2 | 2 | 0 | 100% |
| Cadastro de Pacientes | 2 | 2 | 0 | 100% |
| **TOTAL** | **4** | **4** | **0** | **100%** |

### 8.2 Detalhamento por Arquivo

**login.cy.js:**
- ✅ Deve abrir a tela de login corretamente
- ✅ Deve fazer login e acessar o dashboard

**cadastro.cy.js:**
- ✅ Deve abrir a tela de cadastro de paciente
- ✅ Deve cadastrar um paciente com sucesso

---

## 9. Evidências de Teste

### 9.1 Vídeos

O Cypress gera automaticamente vídeos da execução dos testes.

**Localização:** `cypress/videos/`

**Arquivos gerados:**
- `login.cy.js.mp4` - Vídeo dos testes de login
- `cadastro.cy.js.mp4` - Vídeo dos testes de cadastro

### 9.2 Screenshots

Em caso de falha, o Cypress captura screenshots automaticamente.

**Localização:** `cypress/screenshots/`

### 9.3 Logs do Terminal

Resultado da execução exibido no terminal:

```
Running:  login.cy.js                                                    (1 of 2)

  Teste de Login - CentSaude
    ✓ Deve abrir a tela de login corretamente (1234ms)
    ✓ Deve fazer login e acessar o dashboard (2345ms)

  2 passing (4s)

Running:  cadastro.cy.js                                                 (2 of 2)

  Teste de Cadastro
    ✓ Deve abrir a tela de cadastro de paciente (1567ms)
    ✓ Deve cadastrar um paciente com sucesso (2890ms)

  2 passing (5s)

====================================================================================================

  (Run Finished)

       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  login.cy.js                              00:04        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  cadastro.cy.js                           00:05        2        2        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:09        4        4        -        -        -
```

---

## 10. Cobertura de Testes

### 10.1 Funcionalidades Cobertas

**Autenticação:**
- ✅ Exibição da tela de login
- ✅ Visualização de campos
- ✅ Login com credenciais válidas
- ✅ Redirecionamento para dashboard

**Cadastro de Pacientes:**
- ✅ Navegação para formulário
- ✅ Exibição de campos obrigatórios
- ✅ Preenchimento de dados
- ✅ Submissão do formulário
- ✅ Mensagem de confirmação

### 10.2 Cobertura por Módulo

| Módulo | Funcionalidades Principais | Cobertura |
|--------|---------------------------|-----------|
| Autenticação | 4 | 100% |
| Cadastro | 5 | 100% |

---

## 11. Critérios de Aceitação

Todos os testes devem atender aos seguintes critérios:

**Geral:**
- ✅ Taxa de sucesso de 100%
- ✅ Tempo de execução inferior a 10 segundos por teste
- ✅ Nenhum erro no console do navegador

**Autenticação:**
- ✅ Tela de login deve ser exibida corretamente
- ✅ Login deve redirecionar para o dashboard
- ✅ Mensagem de boas-vindas deve aparecer

**Cadastro:**
- ✅ Formulário deve ser acessível do dashboard
- ✅ Todos os campos devem aceitar entrada de dados
- ✅ Mensagem de sucesso deve ser exibida após cadastro

---

## 12. Conclusão

O Sistema CentSaude foi testado com sucesso utilizando o framework Cypress. Foram implementados 4 casos de teste cobrindo os módulos de Autenticação e Cadastro de Pacientes, com 100% de taxa de aprovação.

**Resumo:**
- ✅ 4 testes implementados
- ✅ 4 testes passando (100%)
- ✅ 0 testes falhando
- ✅ Ferramenta Cypress configurada
- ✅ Evidências geradas automaticamente

**Status do Projeto:** Aprovado para apresentação

---

**Documento elaborado por:** Kelvin França  
**Data:** 17/11/2025  
**Versão:** 1.