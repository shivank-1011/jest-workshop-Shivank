function calculateFinalAmount(subtotal, coupon) {
  if (typeof subtotal !== "number" || Number.isNaN(subtotal) || subtotal < 0) {
    throw new Error("Invalid subtotal");
  }

  let total = subtotal;

  if (subtotal >= 1000) {
    total = total - total * 0.05;
  }

  if (!coupon) {
    return Math.max(0, Math.round(total * 100) / 100);
  }

  const normalizedCoupon = coupon.toUpperCase();

  if (normalizedCoupon === "SAVE10") {
    const discount = Math.min(subtotal * 0.1, 100);
    total = total - discount;
  } else if (normalizedCoupon === "FLAT50") {
    total = total - 50;
  }
  else{
    throw new Error("Invalid Coupon")
  }

  return Math.max(0, Math.round(total * 100) / 100);
}

module.exports = { calculateFinalAmount };