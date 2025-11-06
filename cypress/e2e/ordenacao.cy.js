import loginPage from "../pages/LoginPage";
import OrdenacaoPage from "../pages/OrdenacaoPage";

describe('Ordenação de Produtos', () => {

  beforeEach(() => {
    cy.login();
  })

  it('Ordenação de A → Z', () => {
    OrdenacaoPage.selecionarOrdenacao('az');

    OrdenacaoPage.obterListaNomes().then(lista => {
      const listaOrdenada = [...lista].sort();
      expect(lista).to.deep.equal(listaOrdenada);
    });
  });

  it('Ordenação de Z → A', () => {
    OrdenacaoPage.selecionarOrdenacao('za');

    OrdenacaoPage.obterListaNomes().then(lista => {
      const listaOrdenada = [...lista].sort().reverse();
      expect(lista).to.deep.equal(listaOrdenada);
    });
  });

  it('Ordenação por preço Low → High', () => {
    OrdenacaoPage.selecionarOrdenacao('lohi');

    OrdenacaoPage.obterListaPrecos().then(lista => {
      const listaOrdenada = [...lista].sort((a, b) => a - b);
      expect(lista).to.deep.equal(listaOrdenada);
    });
  });

  it('Ordenação por preço High → Low', () => {
    OrdenacaoPage.selecionarOrdenacao('hilo');

    OrdenacaoPage.obterListaPrecos().then(lista => {
      const listaOrdenada = [...lista].sort((a, b) => b - a);
      expect(lista).to.deep.equal(listaOrdenada);
    });
  });

});
