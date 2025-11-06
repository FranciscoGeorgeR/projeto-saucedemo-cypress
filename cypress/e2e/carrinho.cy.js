/// <reference types="cypress" />
import loginPage from "../pages/LoginPage"
import CarrinhoPage from "../pages/CarrinhoPage"
import { PRODUTOS } from "../constants/ProdutosConstants"

describe('Carrinho - Fluxos Completos', () => {

  beforeEach(() => {
    cy.login();
  })

  it('Adicionar 1 item ao carrinho', () => {
    CarrinhoPage.adicionarProduto(PRODUTOS.BACKPACK);
    CarrinhoPage.validarQuantidadeCarrinho('1');
  });

  it('Adicionar 2 itens ao carrinho', () => {
    CarrinhoPage.adicionarProduto(PRODUTOS.BACKPACK);
    CarrinhoPage.adicionarProduto(PRODUTOS.BIKE_LIGHT);
    CarrinhoPage.validarQuantidadeCarrinho('2');
  });

  it('Remover item do carrinho e validar badge desaparece', () => {
    CarrinhoPage.adicionarProduto(PRODUTOS.BACKPACK);
    CarrinhoPage.validarQuantidadeCarrinho('1');
    CarrinhoPage.removerProduto(PRODUTOS.BACKPACK);
    CarrinhoPage.validarCarrinhoVazio();
  });

  it('Validar que itens se mantém ao navegar entre telas', () => {
    CarrinhoPage.adicionarProduto(PRODUTOS.BACKPACK);
    CarrinhoPage.adicionarProduto(PRODUTOS.BIKE_LIGHT);

    CarrinhoPage.abrirCarrinho();
    cy.go('back'); // volta para listagem
    CarrinhoPage.validarQuantidadeCarrinho('2');
  });

});
