import { createSelector } from "@reduxjs/toolkit";

const cartItems = (state) => state.cart.cartItems;

// quantity count

export const cartItemsSelector = createSelector(cartItems, (items) => {
  return items.reduce((count, item) => count + item.quantity, 0);
});
// sub price

export const cartSubPriceSelector = createSelector(cartItems, (items) =>
  items.reduce((count, item) => {
    if (item.productPromotionalPrice > 0) {
      return count + item.quantity * item.productPromotionalPrice;
    }
    return count + item.quantity * item.productPrice;
  }, 0)
);

// promotion price

export const cartPromoPrice = createSelector(cartItems, (items) =>
  items.reduce(
    (count, item) =>
      Math.trunc((count + item.quantity * item.productPrice) / 30),
    0
  )
);

// finally price

export const cartFinallyPrice = createSelector(cartItems, (items) =>
  items.reduce((count, item) => {
    if (item.productPromotionalPrice > 0) {
      return Math.trunc(
        count + item.quantity * item.productPromotionalPrice
      );
    }
    return Math.trunc(
      count + item.quantity * item.productPrice
    );
  }, 0)
);
