/// <reference types="cypress" />

import loginPage from "../pages/LoginPage"

describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Realizar Login', () => {
    loginPage.campoNome('standard_user')
    loginPage.campoSenha('secret_sauce')
    loginPage.clickLogin()
    loginPage.msgConfirmarLogin()
  })

  it('Login com Usuário Bloqueado', () => {
    loginPage.campoNome('locked_out_user')
    loginPage.campoSenha('secret_sauce')
    loginPage.clickLogin()
    loginPage.validarMensagemErro('Epic sadface: Sorry, this user has been locked out.')
  })

  it('Login com Senha Incorreta', () => {
    loginPage.campoNome('standard_user')
    loginPage.campoSenha('senhaErrada')
    loginPage.clickLogin()
    loginPage.validarMensagemErro('Epic sadface: Username and password do not match')
  })

  it('Login com Campos Vazios', () => {
    loginPage.clickLogin()
    loginPage.validarMensagemErro('Epic sadface: Username is required')
  })

})
