//sort
this.products = [...this.categories[0].products];
if (item === "desc") {
  this.products = this.products.sort((x, y) => {
    return y.price - x.price;
  });
}
if (item === "asc") {
  this.products = this.products.sort((x, y) => {
    return x.price - y.price;
  });
}
