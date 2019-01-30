import { computeBasketValue } from "./basketValue/basketValue";

const chooseOptimalBasket = items => {
  const basketOfItem = makeBasketFromItems(items);

  // Make a list of every possible pair
  // Remove each pair from the original array
  // compute value for every list of 5 items
  // choose the onw with the highest value (lowest priority)
  return computeBasketValue(basketOfItem);
};

const makeBasketFromItems = items => {
  const basketOfItems = items.reduce(addToBasket, { weithts: 0, shapes: 0 });
  return basketOfItems;
};

const addToBasket = (acc, current) => ({
  weights: acc.weights.concat(current),
  shapes: acc.shapes.concat(current)
});

const makeEveryPossiblePair = items => {};
