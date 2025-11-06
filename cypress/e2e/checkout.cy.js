import loginPage from "../pages/LoginPage"
import CarrinhoPage from "../pages/CarrinhoPage"
import CheckoutPage from "../pages/CheckoutPage";
import { PRODUTOS } from "../constants/ProdutosConstants"


describe('Checkout - Fluxo Completo', () => {

  beforeEach(() => {
    cy.login();
  })

  it('Fluxo completo de checkout com 1 item', () => {
    CarrinhoPage.adicionarProduto(PRODUTOS.BACKPACK);
    CarrinhoPage.abrirCarrinho();

    CheckoutPage.clicarCheckout();
    CheckoutPage.preencherDados('Chico', 'Souza', '12345');

    CheckoutPage.validarResumo('Item total:', 'Tax:', 'Total:');

    CheckoutPage.finalizarCompra();
    CheckoutPage.voltarParaHome();
  });

  it('Não permitir continuar sem preencher os campos obrigatórios', () => {
    CarrinhoPage.adicionarProduto(PRODUTOS.BACKPACK);
    CarrinhoPage.abrirCarrinho();

    CheckoutPage.clicarCheckout();
    CheckoutPage.botaoContinueCheckout();
    CheckoutPage.validarErro('Error: First Name is required');
  });

});
