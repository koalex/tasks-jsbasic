class Menu {
  /**
   * Компонент "Меню"
   * @param {Element} element - корневой элемент, в который будет вставлен компонент меню
   * @param {Array<Object>} data - массив с данными меню
   * @example пример структуры одного пункта меню с подменю (только у корневого элемент меню может быть подменю)
   *   [
   *   ...
   *   {
   *        id: 'cameraphotos',
   *        title: 'Camera & Photo',
   *        submenu: [
   *          {
   *            id: 'cameraphotos_accessories',
   *            title: 'Accessories',
   *          }
   *        ]
   *   },
   *   ... ]
   */
  constructor(element, data) {
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;
