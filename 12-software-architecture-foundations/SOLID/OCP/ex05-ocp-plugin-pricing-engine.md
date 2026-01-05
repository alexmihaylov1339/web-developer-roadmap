# EX05 – Open/Closed Principle: Plugin-Based Pricing Engine (Hardest)

## Goal

Build a **plugin-based pricing engine** that follows **Open/Closed Principle (OCP)**:

- The core pricing engine must remain stable.
- New pricing rules must be added by **extension** (new plugins), not by modifying core logic.

This exercise is intentionally harder and more realistic than previous ones.

---

## Starting Code

```js
class PricingEngine {
  calculate(cart) {
    const { items, customer } = cart;

    let subtotal = 0;
    for (const item of items) {
      subtotal += item.price * item.quantity;
    }

    // 👇 Rules are hardcoded (violates OCP)
    // Rule A: 10% off for VIP customers
    let total = subtotal;
    if (customer.isVip) {
      total = total * 0.9;
    }

    // Rule B: coupon "SAVE15" => -15 if total >= 100
    if (cart.couponCode === "SAVE15" && total >= 100) {
      total = total - 15;
    }

    // Rule C: bulky items (weightKg > 10) => +12 handling fee
    const hasBulky = items.some((i) => i.weightKg > 10);
    if (hasBulky) {
      total = total + 12;
    }

    // Rule D: weekend promo => 5% off
    if (cart.isWeekendPromo) {
      total = total * 0.95;
    }

    // Rule E: tax (20%)
    total = total * 1.2;

    return Number(total.toFixed(2));
  }
}

// Example usage:
const engine = new PricingEngine();

const cart = {
  items: [
    { sku: "A1", price: 60, quantity: 1, weightKg: 2 },
    { sku: "B2", price: 50, quantity: 1, weightKg: 12 },
  ],
  customer: { id: "u1", isVip: true },
  couponCode: "SAVE15",
  isWeekendPromo: true,
};

console.log(engine.calculate(cart));
```
