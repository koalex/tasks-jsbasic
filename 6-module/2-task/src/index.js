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
    // эти присвоения не стоит трогать, так как на них завязаны проверки в тестах
    this.slides = slides;
    this.el = element;
  }
}

window.Carousel = Carousel;
