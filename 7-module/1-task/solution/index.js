'use strict';

class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
    this.el.addEventListener('click', (event) => this.onClick(event));
  }

  show() {
    // Здесь код загрузки продуктов через fetch
    return fetch(this.productsUrl)
      .then((resp) => resp.json())
      .then((data) => this.render(data))
      .catch((err) => console.error('show error', err));
  }

  render(products) {
    this.allProducts = products;

    const list = products
      .map((product) => this._generateProduct(product))
      .join('');

    this.el.innerHTML = `
      <div>
        <h3 class="section-title">
          Top Recommendations For You | 
          <a href="/checkout.html">Your Cart</a>
        </h3>
        <div class="row homepage-cards">
            ${list}
        </div>
      </div>
    `;
  }

  onClick(event) {
    let target = event.target;
    let isAddToCart = target.dataset.buttonRole === 'add-to-cart';

    if (!isAddToCart) {
      return;
    }

    let isConfirmed = confirm('Вы уверенны, что хотите добавить товар в корзину?');
    if (!isConfirmed) {
      return;
    }

    let parent = target.closest('.products-list-product');
    let productToAddId = parseInt(parent.dataset.productId, 10);

    let productListJSON = localStorage.getItem(this.productsStoreKey);
    let productList = JSON.parse(productListJSON) || [];
    let isAlreadyAdded = productList.some((product) => product.id === productToAddId);

    if (isAlreadyAdded) {
      return;
    }

    let productToAdd = this.allProducts.find((product) => product.id === productToAddId);
    productList.push(productToAdd);

    let updatedProductListJSON = JSON.stringify(productList);
    localStorage.setItem(this.productsStoreKey, updatedProductListJSON);
  }

  _generateProduct(product) {
    const allStarsHTML = this._generateStars(product.rating);
    const ratingReviewsHTML = this._generateReviewsAmount(product.rating);
    const priceHTML = this._generatePrice(product);

    return `
    <div data-product-id="${product.id}" class="products-list-product col-md-6 col-lg-4 mb-4">
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
          
          <button class="product-add-to-cart" data-button-role="add-to-cart">
            Add to cart
          </button>
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
