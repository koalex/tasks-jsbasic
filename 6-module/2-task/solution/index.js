class Carousel {
  /**
   * Компонент "Карусель"
   * @param {Element} element - корневой элемент, в который будет вставлен компонент карусели
   * @param {Array<Object>} slides - массив слайдов, которые нужно отрисовать.
   * @example пример структуры одного слайда
   *   [
   *   ...
   *   {
   *        id: 0,
   *        title: 'BEST LAPTOP DEALS',
   *        img: 'ссылка на фоновую картинку слайда'
   *   },
   *   ... ]
   */
  constructor(element, slides) {
    this.slides = slides;
    this.el = element;

    this.render();
    this.showSlide(this.slides[0].id);

    /**
     * Обратите внимание, здесь используется arrow function, для того чтобы при наступлении события
     * в метод this.onClick не потерять this.
     */
    this.el.addEventListener('click', event => this.onClick(event));
  }

  onClick(event) {
    const el = event.target.closest('[role="button"]');
    let newSlideIndex = null;

    if (el.dataset.slide === 'prev') {
      newSlideIndex = this.activeSlide - 1;
    } else if (el.dataset.slide === 'next') {
      newSlideIndex = this.activeSlide + 1;
    }

    if (newSlideIndex !== null) {
      this.showSlide(newSlideIndex);
    }
  }

  /**
   * Функция, которая отвечает за отрисовку компонента
   */
  render() {
    this.el.innerHTML = `
      <div id="mainCarousel" class="main-carousel carousel slide">
          <ol class="carousel-indicators">
              ${this.slides.map(item => `
                  <li data-target="#mainCarousel" data-slide-to="${item.id}" class="carousel-indicator"></li>
               `).join('')}
          </ol>
          <div class="carousel-inner js-active-slide">
              <!-- Вот здесь будет активный слайд, после вызова this.showSlide -->
          </div>
          
          <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </button>
          <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </button>
      </div>
    `;
  }

  /**
   * Метод показывает выбранный слайд
   */
  showSlide(id) {
    const el = this.el.querySelector('.js-active-slide');
    const slide = this.slides[id];

    if (!slide) {
      // Пользователь докликал до конца
      return;
    }

    this.activeSlide = id;

    // показываем новый активный слайд
    el.innerHTML = `
      <div class="carousel-item active">
          <img src="${slide.img}" alt="ActiveSlide"/>
          <div class="container">
              <div class="carousel-caption">
                  <h3 class="h1">${slide.title}</h3>
                  <div>
                      <a class="btn" href="#" role="button">
                          View all DEALS
                          <img src="../../assets/icons/icon-angle-white.svg" class="ml-3" alt=""/>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    `;

    // находим активный индикатор (все остальные деактивируем)
    for (const indicator of this.el.querySelectorAll('.carousel-indicator')) {
      indicator.classList.toggle('active', parseInt(indicator.dataset.slideTo, 10) === this.activeSlide);
    }
  }
}

window.Carousel = Carousel;
