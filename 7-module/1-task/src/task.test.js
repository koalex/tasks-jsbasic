describe('7-module-1-task', () => {
  let productList = null;
  let oldFetch = window.fetch;

  function mockFetch(data) {
    window.fetch = function () {
      return Promise.resolve({ json: () => Promise.resolve(data)});
    };
  }

  beforeEach(() => {

    mockFetch([{
      id: 1,
      title: 'Nuraphone - Wireless Bluetooth Over-Ear Headphones',
      imageUrl: '/assets/images/headphones.png',
      rating: {
        stars: 4,
        reviewsAmount: 24
      },
      price: '€ 399',
      oldPrice: null
    }]);

    productList = new ProductList(document.createElement('div'));
  });

  afterEach(() => {
    productList = null;
    window.fetch = oldFetch;
  });

  it('проверяем отрисовку', async () => {
    await productList.show();

    expect(productList.el.querySelector('.card-title').innerHTML)
      .toEqual('Nuraphone - Wireless Bluetooth Over-Ear Headphones');
  });

});
