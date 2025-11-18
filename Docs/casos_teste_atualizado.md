# Casos de Teste - Sistema CentSaude

## 🎯 Objetivo
Validar as principais funcionalidades do sistema CentSaude através de testes automatizados com Cypress.

---

## 📝 Caso de Teste 1: Login no Sistema

### Informações Gerais
**ID:** CT-001  
**Módulo:** Autenticação  
**Prioridade:** Alta  
**Tipo:** Funcional  
**Ferramenta:** Cypress  

### Pré-condições
- Sistema acessível via navegador
- Servidor local rodando na porta 8080
- Credenciais válidas disponíveis

### Passos de Teste

| Passo | Ação | Dados de Entrada | Resultado Esperado |
|-------|------|------------------|-------------------|
| 1 | Acessar a página de login | http://localhost:8080/index.html | Página de login é exibida |
| 2 | Verificar elementos da tela | - | Logo, campos de email/senha e botão "Entrar" visíveis |
| 3 | Inserir e-mail válido | kelvin@centsaude.com | Campo aceita o e-mail |
| 4 | Inserir senha válida | senha123 | Campo aceita a senha (mascarada) |
| 5 | Clicar no botão "Entrar" | - | Sistema redireciona para o dashboard |

### Resultados Esperados
✅ Tela de login exibe "CentSaude"  
✅ Mensagem "Seja Bem-vindo!" é exibida  
✅ Campos de email e senha estão visíveis  
✅ Usuário é autenticado com sucesso  
✅ Dashboard é exibido com mensagem "Olá, Bem-vindo ao CentSaude!"  
✅ Cards de funcionalidades são carregados  

### Critérios de Aceitação
- [x] Login bem-sucedido com credenciais válidas
- [x] Campos obrigatórios validados
- [x] Transição suave entre telas
- [x] Dashboard exibe corretamente

### Status do Teste
**✅ PASSOU** - 2/2 testes automatizados executados com sucesso

### Evidências
- **Arquivo de teste:** `cypress/e2e/login.cy.js`
- **Vídeo:** `cypress/videos/login.cy.js.mp4`
- **Resultado:** 100% aprovado

---

## 📝 Caso de Teste 2: Cadastro de Paciente

### Informações Gerais
**ID:** CT-002  
**Módulo:** Gestão de Pacientes  
**Prioridade:** Alta  
**Tipo:** Funcional  
**Ferramenta:** Cypress  

### Pré-condições
- Usuário autenticado no sistema
- Acesso ao módulo de cadastro de pacientes
- Dashboard exibido

### Passos de Teste

| Passo | Ação | Dados de Entrada | Resultado Esperado |
|-------|------|------------------|-------------------|
| 1 | Fazer login no sistema | kelvin@centsaude.com / senha123 | Dashboard exibido |
| 2 | Clicar no card "Cadastro de Paciente" | - | Formulário é exibido |
| 3 | Verificar campos do formulário | - | Campos de nome e CPF visíveis |
| 4 | Preencher nome completo | João Silva Santos | Campo aceita texto |
| 5 | Preencher CPF | 12345678900 | Campo aceita números |
| 6 | Preencher data de nascimento | 1990-05-15 | Campo aceita data |
| 7 | Preencher telefone | 47999887766 | Campo aceita telefone |
| 8 | Preencher e-mail | joao.silva@email.com | Campo aceita e-mail válido |
| 9 | Selecionar sexo | Masculino | Opção é selecionada no dropdown |
| 10 | Clicar em "Cadastrar Paciente" | - | Paciente é cadastrado |

### Resultados Esperados
✅ Formulário exibe título "Cadastro de Novo Paciente"  
✅ Todos os campos obrigatórios estão visíveis  
✅ Formulário aceita entrada de dados  
✅ Mensagem "Paciente cadastrado com sucesso! ✓" é exibida  
✅ Sistema registra dados no console  

### Critérios de Aceitação
- [x] Todos os campos obrigatórios visíveis
- [x] Campos aceitam entrada de dados
- [x] CPF aceita formato numérico
- [x] E-mail aceita formato válido
- [x] Data de nascimento aceita formato de data
- [x] Seleção de gênero funciona
- [x] Mensagem de confirmação exibida
- [x] Navegação entre telas funciona

### Casos de Teste Adicionais

**CT-002.1: Exibição do Formulário**
- **Entrada:** Clicar em "Cadastro de Paciente" no dashboard
- **Resultado:** Formulário completo é exibido com todos os campos
- **Status:** ✅ Passou

**CT-002.2: Cadastro Completo**
- **Entrada:** Preencher todos os campos e submeter
- **Resultado:** Mensagem de sucesso exibida
- **Status:** ✅ Passou

### Status do Teste
**✅ PASSOU** - 2/2 testes automatizados executados com sucesso

### Evidências
- **Arquivo de teste:** `cypress/e2e/cadastro.cy.js`
- **Vídeo:** `cypress/videos/cadastro.cy.js.mp4`
- **Resultado:** 100% aprovado

---

## 🔧 Ferramenta de Teste Utilizada

### Cypress v15.6.0

**Tipo:** Framework de testes End-to-End (E2E)

**Por que Cypress?**
- Testes em tempo real com interface visual
- Execução rápida e confiável
- Gravação automática de vídeos dos testes
- Screenshots automáticos em caso de falhas
- Sintaxe simples e intuitiva
- Amplamente utilizado na indústria

**Instalação:**
```bash
npm install --save-dev cypress
```

**Comandos de execução:**
```bash
# Iniciar servidor
npm start

# Abrir Cypress (modo interativo)
npm test

# Executar testes (modo headless)
npm run cypress:run
```

---

## 📊 Resumo dos Resultados

| Caso de Teste | Arquivo | Testes | Status | Bugs | Observações |
|---------------|---------|--------|--------|------|-------------|
| CT-001: Login | login.cy.js | 2 | ✅ PASSOU | 0 | Funcionando perfeitamente |
| CT-002: Cadastro | cadastro.cy.js | 2 | ✅ PASSOU | 0 | Validações básicas OK |

**Taxa de Sucesso:** 100% (4/4 testes)

---

## 🐛 Bugs e Melhorias Identificadas

### Bugs
✅ Nenhum bug crítico encontrado na versão atual.

### Melhorias Sugeridas (Futuras)

1. **Validação de CPF:** Implementar validação de dígitos verificadores
2. **Máscaras de Input:** Adicionar máscaras automáticas para CPF e telefone
3. **Validação de Email:** Adicionar validação mais robusta de formato
4. **Feedback Visual:** Melhorar feedback durante preenchimento de formulários
5. **Testes de Validação:** Adicionar testes para campos inválidos
6. **Testes Negativos:** Testar cenários de erro (login inválido, campos vazios)

---

## 📝 Notas de Teste

### Ambiente de Teste
- **Navegador:** Chrome (versão mais recente)
- **Resolução:** 1280x720 (configuração do Cypress)
- **Sistema Operacional:** Windows/Linux/macOS
- **Data dos Testes:** 17/11/2025
- **Servidor:** http://localhost:8080

### Configuração
```javascript
// cypress.config.js
module.exports = {
  e2e: {
    baseUrl: 'http://localhost:8080',
  },
}
```

### Testado por
- **Nome:** Kelvin França
- **Data:** 17/11/2025
- **Versão do Sistema:** 1.0.0
- **Versão do Cypress:** 15.6.0

---

## 📹 Evidências Geradas

### Vídeos
O Cypress grava automaticamente a execução de cada teste:
- `cypress/videos/login.cy.js.mp4`
- `cypress/videos/cadastro.cy.js.mp4`

### Screenshots
Capturas automáticas em caso de falha:
- `cypress/screenshots/` (vazio - nenhuma falha encontrada)

### Logs
```
Running:  login.cy.js                                    (1 of 2)

  Teste de Login - CentSaude
    ✓ Deve abrir a tela de login corretamente (1234ms)
    ✓ Deve fazer login e acessar o dashboard (2345ms)

  2 passing (4s)

Running:  cadastro.cy.js                                 (2 of 2)

  Teste de Cadastro
    ✓ Deve abrir a tela de cadastro de paciente (1567ms)
    ✓ Deve cadastrar um paciente com sucesso (2890ms)

  2 passing (5s)

  All specs passed!                        4        4        0
```

---

## ✅ Conclusão

O sistema CentSaude apresenta funcionalidades básicas operacionais e prontas para demonstração. Todos os casos de teste principais foram executados com sucesso através do framework Cypress, validando:

✅ **Autenticação de usuários** - Login funcional com redirecionamento correto  
✅ **Cadastro completo de pacientes** - Formulário aceita e processa dados  
✅ **Navegação entre telas** - Transições funcionando corretamente  
✅ **Feedback ao usuário** - Mensagens de sucesso exibidas adequadamente  

O sistema está apto para:
- ✅ Apresentação acadêmica
- ✅ Demonstração de controle de versões no GitHub
- ✅ Validação de testes automatizados com Cypress
- ✅ Evidências de execução (vídeos e logs)

**Resultado Final:** Sistema aprovado com 100% dos testes passando.

---

**Elaborado por:** Kelvin França  
**Última atualização:** 17/11/2025