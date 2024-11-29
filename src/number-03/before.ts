// Code Smell: Comments | Before

export function applyDiscountIfPossible(price: number): number {
  // We only add discounts if price is above 1000
  if (price > 1000) {
    // Discount is 10%, so the final value has to be multiplied by 0.9
    return price * 0.9;
  }
  // Otherwise just return price as is
  return price;
}
