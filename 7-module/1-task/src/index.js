class ProductList {
  constructor(element) {
    this.el = element;
  }

  getUrl(category) {
    return `/assets/data/${category}.json`;
  }

  show({title, id }) {
    const urlForFetch = this.getUrl(id);

    // Здесь код загрузки продуктов через fetch
    fetch(urlForFetch)
      .then(resp => {console.log('!!!', resp); return resp.json(); })
      .then(data => this.render(data))
      .catch(err => console.error('show error', err));
  }

  render({ title, items }) {
    console.log(title, items);

    const list = items.map(item => (`
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card">
            <div class="card-img-wrap">
                <img class="card-img-top" src="${item.imageUrl}" alt="${item.title}"/>
            </div>
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <div class="rate">
                    <i class="icon-star checked"></i>
                    <i class="icon-star checked"></i>
                    <i class="icon-star checked"></i>
                    <i class="icon-star checked"></i>
                    <i class="icon-star checked"></i>
                    <span class="rate-amount ml-2">24</span>
                </div>
                ${ item.oldPrice ? `
                    <p class="card-text price-text discount">
                        <strong>${item.price}</strong>
                        <small class="ml-2">${item.oldPrice}</small>
                    </p>
                ` : `
                  <p class="card-text price-text">
                      <strong>${item.price}</strong>
                  </p>
                `}
            </div>
        </div>
      </div>
    `)).join('');


    this.el.innerHTML = `
      <div class="row justify-content-end">
        <div class="col-lg-9">
            <h3 class="section-title">${title}</h3>
            <div class="row homepage-cards">
                ${list}
            </div>
        </div>
      </div>
    `;
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
