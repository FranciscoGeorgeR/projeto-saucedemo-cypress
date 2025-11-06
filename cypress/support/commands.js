import loginPage from "../pages/LoginPage"

Cypress.Commands.add('login', (usuario = 'standard_user', senha = 'secret_sauce') => {
    cy.visit('https://www.saucedemo.com/');
    loginPage.campoNome(usuario);
    loginPage.campoSenha(senha);
    loginPage.clickLogin();
});