import { CARRINHO_ELEMENTS } from "../elements/CarrinhoElements";

class CarrinhoPage {

  adicionarProduto(nomeProduto) {
    cy.get(CARRINHO_ELEMENTS.addProduto(nomeProduto)).click();
  }

  removerProduto(nomeProduto) {
    cy.get(CARRINHO_ELEMENTS.removeProduto(nomeProduto)).click();
  }

  abrirCarrinho() {
    cy.get(CARRINHO_ELEMENTS.botaoCarrinho).click();
  }

  validarQuantidadeCarrinho(qtd) {
    cy.get(CARRINHO_ELEMENTS.badge).should('have.text', qtd);
  }

  validarCarrinhoVazio() {
    cy.get(CARRINHO_ELEMENTS.badge).should('not.exist');
  }

}

export default new CarrinhoPage();
