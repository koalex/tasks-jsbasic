class ProductList {
  constructor(element) {
    this.el = element;
    this.fetchProducts();
  }

  fetchProducts() {
    // Здесь код загрузки продуктов через fetch
    fetch('/assets/data/products.json').then(data => this.render(data));
  }

  render(data) {
    console.log(data);
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;