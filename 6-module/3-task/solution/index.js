'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">

       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>

      </ul>
    </li>

    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">

       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>

       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>

      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.backdrop = document.querySelector('.backdrop');

    element.innerHTML = this.template;

    let mainMenuOptions = element.querySelectorAll('.list-group-item');

    for (const menuOption of mainMenuOptions) {
      menuOption.addEventListener('pointerenter', (event) => this.toggleMenuOption(event));
      menuOption.addEventListener('pointerleave', (event) => this.toggleMenuOption(event));
    }
  }

  toggleMenuOption(event) {
    let dropdownMenu = event.target.querySelector('.dropdown-menu');

    dropdownMenu.classList.toggle('show');
    if (this.backdrop) {
      this.backdrop.classList.toggle('show');
    }
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;
