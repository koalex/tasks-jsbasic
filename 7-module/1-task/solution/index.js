class ProductList {
  constructor(element) {
    this.el = element;
  }

  getUrl(category) {
    return `/assets/data/${category}.json`;
  }

  show({ id }) {
    const urlForFetch = this.getUrl(id);

    // Здесь код загрузки продуктов через fetch
    fetch(urlForFetch)
      .then((resp) => resp.json())
      .then((data) => this.render(data))
      .catch((err) => console.error('show error', err));
  }

  render({ title, items }) {
    const list = items
      .map((product) => this._generateProduct(product))
      .join('');

    this.el.innerHTML = `
      <div>
        <h3 class="section-title">${title}</h3>
        <div class="row homepage-cards">
            ${list}
        </div>
      </div>
    `;
  }

  _generateProduct(product) {
    const allStarsHTML = this._generateStars(product.rating);
    const ratingReviewsHTML = this._generateReviewsAmount(product.rating);
    const priceHTML = this._generatePrice(product);

    return `
    <div class="col-md-6 col-lg-4 mb-4">
        <div class="card">
            <div class="card-img-wrap">
              <img class="card-img-top" src="${product.imageUrl}" alt="${product.title}"/>
            </div>
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <div class="rate">
                  ${allStarsHTML}
                  ${ratingReviewsHTML}
              </div>
              ${priceHTML}
          </div>
      </div>
    </div>
`;
  }

  _generateReviewsAmount(productRating) {
    if (productRating) {
      return `
        <span class="rate-amount ml-2">${productRating.reviewsAmount}</span>
      `;
    }

    return '';
  }

  _generateStars(productRating) {
    let ratingStarsCount;
    if (productRating) {
      ratingStarsCount = productRating.stars;
    } else {
      ratingStarsCount = 0;
    }

    let allStarsHTML = '';
    let maximumStarsCount = 5;
    let star = '<i class="icon-star"></i>';
    let starChecked = '<i class="icon-star checked"></i>';

    for (let i = 0; i < maximumStarsCount; i++) {
      if (ratingStarsCount === 0) {
        allStarsHTML += star;
      } else {
        allStarsHTML += starChecked;
        ratingStarsCount--;
      }
    }

    return allStarsHTML;
  }

  _generatePrice(product) {
    if (product.oldPrice) {
      return `
        <p class="card-text price-text discount">
            <strong>${product.price}</strong>
            <small class="ml-2">${product.oldPrice}</small>
        </p>
      `;
    } else {
      return `
        <p class="card-text price-text">
            <strong>${product.price}</strong>
        </p>
      `;
    }
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
