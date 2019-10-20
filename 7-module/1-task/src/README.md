## Проект, компонента ProductList:

### Что нужно сделать:
Создать класс компонеты ProductList, которая будет рисовать список товаров внутрь заданного элемента.
Конструктор класса принимает элемент, в который он вставляет свою разметку. Массив товаров нужно получить с сервера, сделав запрос.

### Примерный алгоритм выполнения:

- Сделать GET запрос за МАССИВОМ товаров с помощь fetch('/assets/data/products.json'); !!! Не забудьте преобразовать ответ, вызвав метод "json()". В результате этого шага вы получите массив объектов товаров
Пример объекта для ОДНОГО товара:
```javascript
const product = {
    title: 'Название товара',
    imageUrl: '/ссылка на картинку',
    // Свойство rating либо объект, либо null, если никто не оставил отзыв
    rating: {
        stars: 4, // Число от 0 до 5, количество звезд рейтинга
        reviewsAmount: 12, // Количество отзывов на товар
    },
    price: '$353', // Строка с текущей ценой цена
    oldPrice: null, // Строка со старой ценой или null, если старой цены нет. Если старая цена есть, ее нужно показать
}
```

- Отрисовать разметку компоненты:
```html
Основа разметки всей компоненты, в которую нужно вставить список карточек:
<div class="row justify-content-end">
    <div class="col-lg-9">
        <h3 class="section-title">Top Recommendations for You</h3>
        <div class="row homepage-cards">
            <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
        </div>
    </div>
</div>
```

- Разметка карточки товара:
```html
<div class="col-md-6 col-lg-4 mb-4">
    <div class="card">
        <div class="card-img-wrap">
            <img class="card-img-top" src="https://iliakan.github.io/course-project/assets/images/turntable.png" alt="Card image cap">
        </div>
        <div class="card-body">
            <h5 class="card-title">Victrola Pro USB Bluetooth Turntable Vinyl to MP3 Function</h5>
            <div class="rate">
                <i class="icon-star checked"></i>
                <i class="icon-star checked"></i>
                <i class="icon-star checked"></i>
                <i class="icon-star checked"></i>
                <i class="icon-star checked"></i>
                <span class="rate-amount ml-2">24</span>
            </div>
            <p class="card-text price-text discount"><strong>€ 129.92</strong>
            <small class="ml-2">€ 250</small></p>
        </div>
    </div>
</div>
```
- https://codepen.io/Dolgach/pen/EqbeEx?editors=0010 вот здесь мы уже рисовали звезды. !!! Обратите внимание на то, что там используется другой подход и другие CSS классы, просто скопировать и вставить не получится.
- CSS Классы для звездочек
    - "icon-star" - базовый класс, который должен быть у всех звезд
    - "checked" - если звезда закрашена
    - "active" - если звезда не закрашена, но активна (Активная звезда имеет желтую окантовку, неактивная - серую)

* Разметка для цены имеет несколько состояний:
Обычная цена, когда у нас нет старой цены:
```html
<p class="card-text price-text">
    <strong>€ 47.31</strong>
</p>
```

Цена, когда на товар скидка и у нас есть старая цена:
```html
<p class="card-text price-text discount">
    <strong>€ 79.99</strong>
    <small class="ml-2">€ 90.55</small>
</p>
```

- В итоге вы получите что-то похожее:
```html
<div class="row justify-content-end">
    <div class="col-lg-9">
        <h3 class="section-title">Top Recommendations for You</h3>
        <div class="row homepage-cards">
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card">
                    <div class="card-img-wrap">
                        <img class="card-img-top" src="https://iliakan.github.io/course-project/assets/images/headphones.png" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Nuraphone - Wireless Bluetooth Over-Ear Headphones</h5>
                        <div class="rate">
                            <i class="icon-star checked"></i>
                            <i class="icon-star checked"></i>
                            <i class="icon-star checked"></i>
                            <i class="icon-star checked"></i>
                            <i class="icon-star active"></i>
                            <span class="rate-amount ml-2">24</span>
                        </div>
                        <p class="card-text price-text"><strong>€ 399</strong></p>
                    </div>
                </div>
            </div>
            <!--Здесь будет больше карточек, для примера только одна-->
        </div>
    </div>
</div>
```

3. Втставить разметку в элемент, который передается как параметр в конструктор при создании компоненты