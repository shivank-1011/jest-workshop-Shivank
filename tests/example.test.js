const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

test("Check invalid subtotal", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal"
  );
});

test("no coupon", () => {
  expect(calculateFinalAmount(500)).toBe(500);
});

test("if subtotal>=1000 then 5% discount", () => {
  expect(calculateFinalAmount(1500)).toBe(1425);
});

test("if subtotal<1000 then 10% discount", () => {
  expect(calculateFinalAmount(500, "SAVE10")).toBe(450);
});

test("FLAT50", () => {
  expect(calculateFinalAmount(500, "FLAT50")).toBe(450);
});

test("case insensitive error", () => {
  expect(calculateFinalAmount(500, "flat50")).toBe(450);
});
test("invalid coupon",()=>{
  expect(()=>calculateFinalAmount(100,"Invalid")).toThrow("Invalid Coupon")
})