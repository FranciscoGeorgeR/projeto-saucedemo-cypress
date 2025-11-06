export const CARRINHO_ELEMENTS = {
  botaoCarrinho: '.shopping_cart_link',
  badge: '.shopping_cart_badge',
  addProduto: (nomeProduto) => `[data-test="add-to-cart-${nomeProduto}"]`,
  removeProduto: (nomeProduto) => `[data-test="remove-${nomeProduto}"]`,
};
