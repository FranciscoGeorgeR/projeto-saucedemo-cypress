import { ORDENACAO_ELEMENTS } from "../elements/OrdenacaoElements";

class OrdenacaoPage {

  selecionarOrdenacao(tipo) {
    cy.get(ORDENACAO_ELEMENTS.selectOrdenacao).select(tipo);
  }

  obterListaNomes() {
    return cy.get(ORDENACAO_ELEMENTS.listaNomesProdutos)
      .then($items => $items.toArray().map(item => item.innerText));
  }

  obterListaPrecos() {
    return cy.get(ORDENACAO_ELEMENTS.listaPrecosProdutos)
      .then($items =>
        $items.toArray().map(item =>
          parseFloat(item.innerText.replace('$', ''))
        )
      );
  }
}

export default new OrdenacaoPage();
