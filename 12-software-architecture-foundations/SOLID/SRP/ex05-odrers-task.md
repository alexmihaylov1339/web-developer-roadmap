# EX05 – SRP in an OrderService (Realistic Scenario)

## Goal

Apply the Single Responsibility Principle (SRP) in a more complex, realistic case:
an `OrderService` that mixes **business logic**, **persistence**, and **notifications**.

You must separate responsibilities into clear, focused units.

---

## Starting Code (ex05-before.js)

```js
class OrderService {
  create(order) {
    // 1. Validate order
    if (!order.items || order.items.length === 0) {
      throw new Error("Order must have at least one item");
    }

    if (!order.customerEmail) {
      throw new Error("Order must have a customer email");
    }

    // 2. Calculate total price
    let total = 0;
    for (const item of order.items) {
      total += item.price * item.quantity;
    }

    if (order.discountCode === "SUMMER10") {
      total = total * 0.9;
    }

    console.log("Calculated total price:", total);

    // 3. Save to "database"
    console.log("Saving order to database:", {
      ...order,
      total,
    });

    // 4. Send confirmation email
    console.log(`Sending email to ${order.customerEmail} with total ${total}`);
  }
}

// Example usage:
const service = new OrderService();
service.create({
  items: [
    { name: "Item A", price: 10, quantity: 2 },
    { name: "Item B", price: 5, quantity: 1 },
  ],
  customerEmail: "customer@example.com",
  discountCode: "SUMMER10",
});
```
