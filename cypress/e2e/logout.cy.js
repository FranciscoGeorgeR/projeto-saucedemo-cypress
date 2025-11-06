import loginPage from "../pages/LoginPage";
import CarrinhoPage from "../pages/CarrinhoPage";
import LogoutPage from "../pages/LogoutPage";
import { PRODUTOS } from "../constants/ProdutosConstants";

describe('Logout & Proteções de Acesso', () => {

  beforeEach(() => {
    cy.login();
  })

  it('Logout pelo menu', () => {
    LogoutPage.abrirMenu();
    LogoutPage.clicarLogout();
    LogoutPage.validarLogout();
  });

  it('Carrinho deve persistir após logout e novo login', () => {
    CarrinhoPage.adicionarProduto(PRODUTOS.BACKPACK);
    CarrinhoPage.validarQuantidadeCarrinho('1');

    LogoutPage.abrirMenu();
    LogoutPage.clicarLogout();
    LogoutPage.validarLogout();

    cy.reload();

    // Logar novamente
    loginPage.campoNome('standard_user')
    loginPage.campoSenha('secret_sauce')
    loginPage.clickLogin()

    // Badge deve desaparecer
    CarrinhoPage.validarCarrinhoVazio()
  });

});
