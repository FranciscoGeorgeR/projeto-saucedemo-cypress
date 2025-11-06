import { PRODUTOS_ELEMENTS } from '../elements/ProdutosElements';

class produtosPage {

  addProduto(nomeProduto) {
    cy.get(PRODUTOS_ELEMENTS.addProduto(nomeProduto)).click()
  }

  removeProduto(nomeProduto) {
    cy.get(PRODUTOS_ELEMENTS.remProduto(nomeProduto)).click()
  }

  badgeCarrinho(valor) {
    cy.get('.shopping_cart_badge').should('have.text', valor)
  }

  badgeCarrinhoNaoExiste() {
    cy.get('.shopping_cart_badge').should('not.exist')
  }


}


export default new produtosPage();