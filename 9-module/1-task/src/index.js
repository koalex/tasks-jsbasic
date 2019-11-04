'use strict';

class CheckoutProductList {
  productsStoreKey = 'cart-products';

  constructor(parentElement) {
    this.render(parentElement);
  }

  render(parentElement) {
    let productListJSON = localStorage.getItem(this.productsStoreKey);
    let productList = JSON.parse(productListJSON) || [];

    let products = productList
      .map((product) => this._generateProduct(product))
      .join('');

    parentElement.innerHTML = `
      <div class="product-list-box">
          ${products}
      </div>
    `;

    let productListElement = parentElement.querySelector('.product-list-box');

    productListElement.addEventListener('click', (event) => this.onListClick(event, productList));
  }

  onListClick(event, productList) {
    let target = event.target;
    let isRemove = target.dataset.buttonRole === 'checkout-remove-product';

    if (!isRemove) {
      return;
    }

    let isConfirmed = confirm('Вы уверенны, что хотите удалить этот товар из корзины?');
    if (isConfirmed) {
      let parent = target.closest('.product-wrapper');
      let removeProductId = parseInt(parent.dataset.productId, 10);

      let filteredProductList = productList
        .filter((product) => product.id !== removeProductId);
      let filteredProductListJSON = JSON.stringify(filteredProductList);
      localStorage.setItem(this.productsStoreKey, filteredProductListJSON);
      parent.remove();
    }
  }

  _generateProduct(product) {
    let allStarsHTML = this._generateStars(product.rating);
    let ratingReviewsHTML = this._generateReviewsAmount(product.rating);

    return `

    <div data-product-id="${product.id}" class="product-wrapper box-inner-col description-col">
  
      <div class="product-image">
        <img src="${product.imageUrl}" alt="img">
      </div>
      
      <div class="product-description">
        <h4 class="col-title mb-2">${product.title}</h4>
        <div class="rate">
          ${allStarsHTML}
        </div>
        ${ratingReviewsHTML}
        
        <p class="price-text mb-0 mt-2 d-inline-block d-md-none">
          <strong>${product.price}</strong>
        </p>
      </div>
      
      <div class="product-price">
          <p class="mb-0 font-weight-light">Price:</p>
          <h4 class="col-title price-text mb-2">${product.price}</h4>
      </div>
      
      <div class="product-remove-button-wrapper">
        <button type="button"
                data-button-role="checkout-remove-product"
                class="product-remove-button">
          X
        </button>
      </div>
      
      </div>
    `;

  }

  _generateReviewsAmount(productRating) {
    if (productRating) {
      return `
            <p class="rate-amount d-none d-md-block mt-1">
                ${productRating.reviewsAmount} reviews
            </p>
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
}

const products = [
  {
    id: 1,
    'title': 'Nuraphone - Wireless Bluetooth Over-Ear Headphones',
    'imageUrl': '/assets/images/headphones.png',
    'rating': {
      'stars': 4,
      'reviewsAmount': 24
    },
    'price': '€ 399',
    'oldPrice': null
  },
  {
    id: 2,
    'title': 'Homido Virtual Reality Headset for Smartphone',
    'imageUrl': '/assets/images/headset.png',
    'rating': {
      'stars': 5,
      'reviewsAmount': 121
    },
    'price': '€ 47.31',
    'oldPrice': null
  },
  {
    id: 3,
    'title': 'Victrola Pro USB Bluetooth Turntable Vinyl to MP3 Function',
    'imageUrl': '/assets/images/turntable.png',
    'rating': {
      'stars': 5,
      'reviewsAmount': 24
    },
    'price': '€ 129.92',
    'oldPrice': '€ 250'
  },
  {
    id: 4,
    'title': 'Zolo Liberty Bluetooth Headphones',
    'imageUrl': '/assets/images/bluetooth-headphones.png',
    'rating': null,
    'price': '€ 79.99',
    'oldPrice': '€ 90.55'
  },
  {
    id: 5,
    'title': 'Libratone Zipp Wireless Speaker',
    'imageUrl': '/assets/images/speaker.png',
    'rating': {
      'stars': 5,
      'reviewsAmount': 11
    },
    'price': '€ 205.98',
    'oldPrice': null
  },
  {
    id: 6,
    'title': 'Mikme Microphone, Black',
    'imageUrl': '/assets/images/microphone.png',
    'rating': {
      'stars': 4,
      'reviewsAmount': 14
    },
    'price': '€ 299.00',
    'oldPrice': null
  }
];

const productsJSON = JSON.stringify(products);
localStorage.setItem('cart-products', productsJSON);

let parentElement = document.querySelector('.product-list-box-wrapper');

new CheckoutProductList(parentElement);


