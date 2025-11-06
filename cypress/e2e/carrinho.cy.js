/// <reference types="cypress" />

import CarrinhoPage from "../pages/CarrinhoPage"
import { PRODUTOS } from "../constants/ProdutosConstants"

describe('Carrinho - Fluxos Completos', () => {

  beforeEach(() => {
    cy.login();
    cy.allure().feature('Carrinho');
  })

  it('Adicionar 1 item ao carrinho', () => {
    cy.allure().story('Adicionar item');
    cy.allure().severity('normal');

    CarrinhoPage.adicionarProduto(PRODUTOS.BACKPACK);
    CarrinhoPage.validarQuantidadeCarrinho('1');
  });

  it('Adicionar 2 itens ao carrinho', () => {
    cy.allure().story('Adicionar múltiplos itens');
    cy.allure().severity('normal');

    CarrinhoPage.adicionarProduto(PRODUTOS.BACKPACK);
    CarrinhoPage.adicionarProduto(PRODUTOS.BIKE_LIGHT);
    CarrinhoPage.validarQuantidadeCarrinho('2');
  });

  it('Remover item do carrinho e validar badge desaparece', () => {
    cy.allure().story('Remover item');
    cy.allure().severity('normal');

    CarrinhoPage.adicionarProduto(PRODUTOS.BACKPACK);
    CarrinhoPage.validarQuantidadeCarrinho('1');
    CarrinhoPage.removerProduto(PRODUTOS.BACKPACK);
    CarrinhoPage.validarCarrinhoVazio();
  });

  it('Validar que itens se mantêm ao navegar entre telas', () => {
    cy.allure().story('Persistência do carrinho');
    cy.allure().severity('minor'); // não é fluxo crítico, mas precisa funcionar

    CarrinhoPage.adicionarProduto(PRODUTOS.BACKPACK);
    CarrinhoPage.adicionarProduto(PRODUTOS.BIKE_LIGHT);

    CarrinhoPage.abrirCarrinho();
    cy.go('back'); // volta para listagem
    CarrinhoPage.validarQuantidadeCarrinho('2');
  });

});
