import { LOGOUT_ELEMENTS } from "../elements/LogoutElements";

class LogoutPage {

  abrirMenu() {
    cy.get(LOGOUT_ELEMENTS.menuButton).click();
  }

  clicarLogout() {
    cy.get(LOGOUT_ELEMENTS.logoutButton).click();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.window().then((win) => win.sessionStorage.clear());
  }

  validarLogout() {
    cy.url().should('eq', 'https://www.saucedemo.com/');
  }

}

export default new LogoutPage();
