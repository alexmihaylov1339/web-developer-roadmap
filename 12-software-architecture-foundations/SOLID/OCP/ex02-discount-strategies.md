# EX02 – Open/Closed Principle: Discount Strategies

## Goal

Practice the **Open/Closed Principle (OCP)** with a more realistic example:
a discount system that keeps growing with new rules.

You will refactor a discount calculator that currently breaks OCP.

---

## Starting Code

```js
class DiscountService {
  calculateTotal(order) {
    let total = 0;

    for (const item of order.items) {
      total += item.price * item.quantity;
    }

    // apply discount based on type
    if (order.type === "none") {
      // no discount
      return total;
    } else if (order.type === "black-friday") {
      // 30% off everything
      return total * 0.7;
    } else if (order.type === "vip") {
      // 20% off
      return total * 0.8;
    } else if (order.type === "coupon") {
      // fixed 10 EUR off if total > 50
      if (total > 50) {
        return total - 10;
      }
      return total;
    } else {
      throw new Error("Unsupported discount type");
    }
  }
}

// Example usage:
const service = new DiscountService();

const order = {
  items: [
    { name: "Item A", price: 30, quantity: 1 },
    { name: "Item B", price: 25, quantity: 1 },
  ],
  type: "black-friday",
};

console.log(service.calculateTotal(order));
```
