import { CHECKOUT_ELEMENTS } from "../elements/CheckoutElements";

class CheckoutPage {

  clicarCheckout() {
    cy.get(CHECKOUT_ELEMENTS.botaoCheckout).click();
  }

  preencherDados(nome, sobrenome, cep) {
    cy.get(CHECKOUT_ELEMENTS.inputNome).type(nome);
    cy.get(CHECKOUT_ELEMENTS.inputSobrenome).type(sobrenome);
    cy.get(CHECKOUT_ELEMENTS.inputCep).type(cep);
    cy.get(CHECKOUT_ELEMENTS.botaoContinue).click();
  }

  validarResumo(subtotal, tax, total) {
    cy.get(CHECKOUT_ELEMENTS.subtotal).should('contain.text', subtotal);
    cy.get(CHECKOUT_ELEMENTS.tax).should('contain.text', tax);
    cy.get(CHECKOUT_ELEMENTS.total).should('contain.text', total);
  }

  finalizarCompra() {
    cy.get(CHECKOUT_ELEMENTS.botaoFinish).click();
    cy.get(CHECKOUT_ELEMENTS.mensagemSucesso).should('contain.text', 'Thank you for your order!');
  }

  voltarParaHome() {
    cy.get(CHECKOUT_ELEMENTS.botaoBackHome).click();
  }

  botaoContinueCheckout() {
    cy.get(CHECKOUT_ELEMENTS.botaoContinue).click();
  }

  validarErro(msgErro) {
    cy.get(CHECKOUT_ELEMENTS.msgErroCheckOut).should('contain.text', msgErro);
  }

}

export default new CheckoutPage();
