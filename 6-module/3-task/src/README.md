## Учебный проект: компонента Menu

### Что нужно сделать:
Создать класс компонеты Menu, которая будет рисовать меню внутрь заданного элемента.
Конструктор класса принимает элемент, в который он вставляет свою разметку.

### Отрисовать компоненту меню
Верстка компоненты:

```html
<ul class="list-group sidebar">
    <li class="list-group-item dropdown">
        <a class="nav-link dropdown-toggle" id="photo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Camera & Photo</a>
        <ul class="dropdown-menu" aria-labelledby="photo">
            <li class="dropdown-item"><a>Accessories</a></li>
            <li class="dropdown-item"><a>Action Cameras & Accessories</a></li>
            <li class="dropdown-item"><a>Binoculars, Telescopes & Optics</a></li>
            <li class="dropdown-item"><a>Camcorders</a></li>
            <li class="dropdown-item"><a>Digital Cameras</a></li>
            <li class="dropdown-item"><a>Digital Picture Frames</a></li>
            <li class="dropdown-item"><a>Film Cameras</a></li>
            <li class="dropdown-item"><a>Film Scanners</a></li>
            <li class="dropdown-item"><a>Flashes</a></li>
            <li class="dropdown-item"><a>Lenses</a></li>
            <li class="dropdown-item"><a>Photo Printers</a></li>
            <li class="dropdown-item"><a> Slide Projectors</a></li>
            <li class="dropdown-item"><a>Slide Viewers</a></li>
            <li class="dropdown-item"><a>Surveillance Cameras</a></li>
            <li class="dropdown-item"><a>Tripods & Monopods</a></li>
            <li class="dropdown-item"><a>Underwater Video & Photography</a></li>
            <li class="dropdown-item"><a>Video Projectors</a></li>
        </ul>
    </li>
    <li class="list-group-item dropdown">
        <a class="nav-link dropdown-toggle" id="cinema" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home Cinema, TV & Video</a>
        <ul class="dropdown-menu" aria-labelledby="cinema">
            <li class="dropdown-item"><a>Home Cinema, TV & Video</a></li>
        </ul>
    </li>
    <li class="list-group-item dropdown">
        <a class="nav-link dropdown-toggle" id="mobile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mobile Phones</a>
        <ul class="dropdown-menu" aria-labelledby="mobile">
            <li class="dropdown-item"><a>Mobile Phones</a></li>
        </ul>
    </li>
    <li class="list-group-item dropdown">
        <a class="nav-link dropdown-toggle" id="pc" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Computers & Components</a>
        <ul class="dropdown-menu" aria-labelledby="pc">
            <li class="dropdown-item"><a>Computers & Components</a></li>
        </ul>
    </li>
</ul>
```
### Реализовать "выпадение" вложенного меню

Каждый пункт основного меню выглядит вот так:
```html
<li class="list-group-item dropdown">
    <a class="nav-link dropdown-toggle" id="cinema" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home Cinema, TV & Video</a>
    <!-- Расскрывающеся подменю  -->
    <ul class="dropdown-menu" aria-labelledby="cinema">
        <li class="dropdown-item"><a>Home Cinema, TV & Video</a></li>
    </ul>
</li>
```
Пункт основного меню имеет классы: "list-group-item dropdown". Список вложенных пунктов меню имеет класс: "dropdown-menu"
Для того, чтобы показывать вложенные пункты меню нужно:
- При наведении мыши на основной пункт меню (событие "mouseenter") добавить класс "show" списку вложенных пуктов меню ("dropdown-menu")
- Когда курсор мыши покидает основной пукт меню (событие "mouseleave") убрать класс "show" со списка вложенных пуктов меню ("dropdown-menu")

### Реализовать "затемнение" 
На странице есть специальная прозрачная подложка, которая закрывает все на странице, кроме меню. Ее тоже можно скрывать/показывать при наведении на основные пункты меню.
- Класс подложки: "backdrop"
- Класс чтобы показать подложку: "show"
- Искать это элемент нужно на всей странице, а не в рамках меню.

### Реализовать событие выбора пункта меню
Если пользователь кликает на элемент меню, то компонент должен сгенерировать пользовательское событие "select" и передать в качестве данных 
`id` выбранного пункта меню.
