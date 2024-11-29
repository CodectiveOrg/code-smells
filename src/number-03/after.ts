// Code Smell: Comments | After

const DISCOUNT_THRESHOLD = 1000;
const DISCOUNT = 0.1;

export function applyDiscountIfPossible(price: number): number {
  if (price > DISCOUNT_THRESHOLD) {
    return price * (1 - DISCOUNT);
  }

  return price;
}
