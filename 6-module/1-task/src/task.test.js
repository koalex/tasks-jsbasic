describe('6-module-1-task', () => {
  let carousel = null;

  beforeEach(() => {
    const slides = [
      {
        id: 0,
        title: 'BEST LAPTOP DEALS',
        img: '../../assets/images/default-slide-img.jpg',
      },
      {
        id: 1,
        title: 'BEST HEADPHONES DEALS',
        img: '../../assets/images/default-slide-img.jpg',
      },
      {
        id: 2,
        title: 'BEST SPEAKERS DEALS',
        img: '../../assets/images/default-slide-img.jpg',
      },
    ];

    carousel = new Carousel(document.createElement('div'), slides);
  });

  afterEach(() => {
    carousel = null;
  });

  it('проверяем, что карусель содержит основные элементы', () => {
    expect(carousel.el.querySelectorAll('.carousel-inner').length).toEqual(1);
    expect(carousel.el.querySelectorAll('.carousel-indicator').length).toEqual(3);
  });

  it('проверяем что при инициализации показан первый слайд (id=0)', () => {
    expect(carousel.el.querySelector('.carousel-item.active .carousel-caption .h1').innerHTML)
      .toEqual('BEST LAPTOP DEALS');

    expect(carousel.el.querySelector('.carousel-indicator[data-slide-to="0"]').classList.contains('active'))
      .toEqual(true);
  });

  it('проверяем работу переключателей', () => {
    carousel.el.querySelector('[data-slide="next"]').dispatchEvent(new Event('click', { bubbles: true }));
    expect(carousel.el.querySelector('.carousel-item.active .carousel-caption .h1').innerHTML)
      .toEqual('BEST HEADPHONES DEALS');

    expect(carousel.el.querySelector('.carousel-indicator[data-slide-to="1"]').classList.contains('active'))
      .toEqual(true);
  });

  it('проверяем, что если мы на первом слайде, то идти назад нельзя', () => {
    carousel.el.querySelector('[data-slide="prev"]').dispatchEvent(new Event('click', { bubbles: true }));
    expect(carousel.el.querySelector('.carousel-item.active .carousel-caption .h1').innerHTML)
      .toEqual('BEST LAPTOP DEALS');

    expect(carousel.el.querySelector('.carousel-indicator[data-slide-to="0"]').classList.contains('active'))
      .toEqual(true);
  });
});
