import { LOGIN_ELEMENTS } from '../elements/LoginElements';

class loginPage {

    campoNome(userName) {
        cy.get(LOGIN_ELEMENTS.inputNome).should('be.visible').type(userName)
    }

    campoSenha(passWord) {
        cy.get(LOGIN_ELEMENTS.inputSenha).should('be.visible').type(passWord)
    }

    clickLogin() {
        cy.get(LOGIN_ELEMENTS.buttonLogin).should('be.visible').click()

    }

    msgConfirmarLogin() {
        cy.contains('Swag Labs').should('be.visible');
    }

    validarMensagemErro(msg) {
        cy.get(LOGIN_ELEMENTS.msgErro).should('contain.text', msg)
    }


}

export default new loginPage();