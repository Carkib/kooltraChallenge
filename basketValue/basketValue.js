import {
  basketHasAllSameShapes,
  basketHasAllDifferentWeights,
  basketHasAllSameWeight,
  basketHasAllDifferentShapes,
  basketHasThreeAndTwoShapeOfTheSameShapes
} from "./basketValueUtils";

const computeBasketValue = basket => {
  if (basketHasPerfectVariety(basket)) {
    return 1;
  }
  if (basketHasWeightVariety(basket)) {
    return 2;
  }
  if (basketHasShapeVariety(basket)) {
    return 3;
  }
  if (basketHasPerfectPairing(basket)) {
    return 4;
  }
  if (basketHasShapePairing(basket)) {
    return 5;
  }
  return 6;
};

const basketHasPerfectVariety = basket =>
  basketHasAllDifferentWeights(basket) && basketHasAllDifferentShapes(basket);

const basketHasWeightVariety = basket =>
  basketHasAllSameShapes(basket) && basketHasAllDifferentWeights(basket);

const basketHasShapeVariety = basket =>
  basketHasAllSameWeight(basket) && basketHasAllDifferentShapes(basket);

const basketHasPerfectPairing = basket =>
  basketHasAllSameWeight(basket) &&
  basketHasThreeAndTwoShapeOfTheSameShapes(basket);

const basketHasShapePairing = basket =>
  !basketHasAllSameWeight(basket) &&
  basketHasThreeAndTwoShapeOfTheSameShapes(basket);

export default computeBasketValue;
