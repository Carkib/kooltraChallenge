import computeBasketValue from "./basketValue";

describe("computing basket value", () => {
  it("should correctly return the value of a perfect variety basket", () => {
    const perfectVarietyBasket = {
      weights: [50, 100, 150, 200, 250],
      shapes: ["square", "circle", "rectangle", "triangle", "oval"]
    };
    expect(computeBasketValue(perfectVarietyBasket)).toBe(1);
  });

  it("should correctly return the value of a basket with weight variety", () => {
    const weightVarietyBasket = {
      weights: [50, 100, 150, 200, 250],
      shapes: ["square", "square", "square", "square", "square"]
    };
    expect(computeBasketValue(weightVarietyBasket)).toBe(2);
  });

  it("should correctly return the value of a basket with shape variety", () => {
    const shapeVarietyBasket = {
      weights: [150, 150, 150, 150, 150],
      shapes: ["square", "square", "square", "square", "square"]
    };
    expect(computeBasketValue(shapeVarietyBasket)).toBe(3);
  });

  it("should correctly return the value of a basket with perfect pairing", () => {
    const perfectPairingBasket = {
      weights: [50, 50, 200, 200, 200],
      shapes: ["square", "square", "circle", "circle", "circle"]
    };
    expect(computeBasketValue(perfectPairingBasket)).toBe(4);
  });

  it("should correctly return the value of a basket with shape pairing", () => {
    const shapePairingBasket = {
      weights: [150, 50, 50, 200, 200],
      shapes: ["square", "square", "circle", "circle", "circle"]
    };
    expect(computeBasketValue(shapePairingBasket)).toBe(5);
  });

  it("should correctly return the value of a discount basket", () => {
    const shapePairingBasket = {
      weights: [150, 50, 50, 200, 200],
      shapes: ["square", "triangle", "rectangle", "circle", "circle"]
    };
    expect(computeBasketValue(shapePairingBasket)).toBe(6);
  });
});
