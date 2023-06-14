import { promoProducts } from "./dataDeal";

export function getProducts() {
  const productList = promoProducts;
  return productList;
}

export function filterProducts(productType) {
  let filtredProducts = getProducts().filter(type => type.tipo === productType);
  return filtredProducts;
}
