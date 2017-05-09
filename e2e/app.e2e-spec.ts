import { ShoppingCartPage } from './app.po';

describe('shopping-cart App', () => {
  let page: ShoppingCartPage;

  beforeEach(() => {
    page = new ShoppingCartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
