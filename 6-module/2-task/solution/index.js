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
    // Ваш код
    this.el = element;
    // глобальынй поиск подложки, обратите внимание ее может не быть
    this.backdrop = document.querySelector('.backdrop');

    this.render(data);

    // Так как событие mouseenter и mouseleave не всплвывает,
    // то находим все элементы списка
    const els = this.el.querySelectorAll('.dropdown');

    for (const el of els) {
      el.addEventListener('mouseenter', () => this.toggleMenu(el, true));
      el.addEventListener('mouseleave', () => this.toggleMenu(el, false));
    }
  }

  toggleMenu(el, state) {
    el.querySelector('.dropdown-menu').classList.toggle('show', state);

    if (this.backdrop) {
      this.backdrop.classList.toggle('show', state);
    }
  }

  render(data) {
    const list = data.map((item) => {
      let submenu = '';

      if (item.submenu && item.submenu.length) {
        submenu = item.submenu.map(subitem => `
           <li data-id="${subitem.id}" class="dropdown-item"><a>${subitem.title}</a></li>
        `);
      }

      return `
        <li class="list-group-item dropdown">
          <a class="nav-link dropdown-toggle" 
            id="${item.id}" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false">${item.title}</a>
          <ul class="dropdown-menu" aria-labelledby="${item.id}">   
            ${submenu}
          </ul>
        </li>
      `;
    }).join('');

    this.el.innerHTML = `<ul class="list-group sidebar">${list}</ul>`;
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;
