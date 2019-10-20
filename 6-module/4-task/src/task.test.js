describe('6-module-4-task', () => {
  let menu = null;

  const backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');
  document.body.appendChild(backdrop);

  beforeEach(() => {
    const items = [
      {
        id: 'cameraphotos',
        title: 'Camera & Photo',
        submenu: [
          {
            id: 'cameraphotos_accessories',
            title: 'Accessories',
          },
        ],
      },
      {
        id: 'cinema',
        title: 'Home Cinema, TV & Video',
        submenu: [
          {
            id: 'cinema_audio',
            title: 'Audio',
          },
          {
            id: 'cinema_video',
            title: 'Video',
          },
        ],
      },

    ];

    menu = new Menu(document.createElement('div'), items);
  });

  afterEach(() => {
    backdrop.classList.remove('show');
    menu = null;
  });

  it('проверяем, что меню содержит все пункты', () => {
    expect(menu.el.querySelectorAll('.dropdown').length).toEqual(2);
    expect(menu.el.querySelectorAll('.dropdown-item').length).toEqual(3);
  });

  it('проверяем, что при наведении на cameraphotos, покажется его подменю', () => {
    menu.el.querySelector('.dropdown').dispatchEvent(new Event('mouseenter', { bubbles: false }));
    expect(menu.el.querySelector('[aria-labelledby="cameraphotos"]').classList.contains('show'))
      .toEqual(true);
  });

  it('проверяем, что при снятии на cameraphotos, меню спрячется', () => {
    menu.el.querySelector('[aria-labelledby="cameraphotos"]').classList.add('show');
    menu.el.querySelector('.dropdown').dispatchEvent(new Event('mouseleave', { bubbles: false }));
    expect(menu.el.querySelector('[aria-labelledby="cameraphotos"]').classList.contains('show'))
      .toEqual(false);
  });

  it('проверем, показ затемнения backdrop', () => {
    menu.el.querySelector('.dropdown').dispatchEvent(new Event('mouseenter', { bubbles: false }));
    expect(backdrop.classList.contains('show'))
      .toEqual(true);
  });

  it('проверем, снятие затемнения затемнения backdrop', () => {
    backdrop.classList.add('show');
    menu.el.querySelector('.dropdown').dispatchEvent(new Event('mouseleave', { bubbles: false }));
    expect(backdrop.classList.contains('show'))
      .toEqual(false);
  });

});
