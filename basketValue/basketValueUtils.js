import { uniq, keys, groupBy } from "lodash";

export const basketHasAllDifferentWeights = basket =>
  uniq(basket.weights).length === basket.weights.length;

export const basketHasAllDifferentShapes = basket =>
  uniq(basket.shapes).length === basket.shapes.length;

export const basketHasAllSameShapes = basket =>
  uniq(basket.shapes).length === 1;

export const basketHasAllSameWeight = basket =>
  uniq(basket.weights).length === 1;

export const basketHasThreeAndTwoShapeOfTheSameShapes = basket =>
  basketHasExactlyTwoShapes(basket) &&
  basketHasThreeOfTheSameShape(basket) &&
  basketHasTwoOfTheSameShape(basket);

export const basketHasExactlyTwoShapes = basket =>
  uniq(basket.shapes).length === 2;

export const basketHasThreeOfTheSameShape = basket => {
  const differentShapes = groupBy(basket.shapes);
  keys(differentShapes).find(key => differentShapes[key].length === 3);
};

export const basketHasTwoOfTheSameShape = basket => {
  const differentShapes = groupBy(basket.shapes);
  keys(differentShapes).find(key => differentShapes[key].length === 2);
};
