/// <reference types="cypress" />

import produtosPage from "../pages/ProdutosPage"
import { PRODUTOS } from "../constants/ProdutosConstants";

describe('Carrinho', () => {

  beforeEach(() => {
    cy.login();
  })

  it('Adicionar 1 item ao carrinho', () => {
    produtosPage.addProduto(PRODUTOS.BACKPACK)
    produtosPage.badgeCarrinho('1')
  })

  it('Adicionar 2 itens ao carrinho', () => {
    produtosPage.addProduto(PRODUTOS.BACKPACK)
    produtosPage.addProduto(PRODUTOS.BIKE_LIGHT)
    produtosPage.badgeCarrinho('2')
  })

  it('Remover item do carrinho', () => {
    produtosPage.addProduto(PRODUTOS.BACKPACK)
    produtosPage.removeProduto(PRODUTOS.BACKPACK)
    produtosPage.badgeCarrinhoNaoExiste()
  })
})