# EX04 – Open/Closed Principle: Shipping Cost Rules Engine

## Goal

Apply **Open/Closed Principle (OCP)** to a realistic pricing/rules problem.

You will refactor shipping cost logic so that **new shipping rules can be added without modifying the core shipping calculator**.

---

## Starting Code

```js
class ShippingService {
  calculate(order) {
    const { country, itemsTotal, weightKg, isExpress, isMember } = order;

    let cost = 0;

    // base price by country
    if (country === "BG") {
      cost = 5;
    } else if (country === "DE") {
      cost = 8;
    } else if (country === "CH") {
      cost = 12;
    } else {
      throw new Error("Unsupported country");
    }

    // weight surcharge
    if (weightKg > 5) {
      cost += 5;
    }

    // express surcharge
    if (isExpress) {
      cost += 10;
    }

    // free shipping for big orders
    if (itemsTotal >= 100) {
      cost = 0;
    }

    // member discount
    if (isMember && cost > 0) {
      cost = cost * 0.9;
    }

    return Number(cost.toFixed(2));
  }
}

// Example usage:
const shipping = new ShippingService();

console.log(
  shipping.calculate({
    country: "DE",
    itemsTotal: 80,
    weightKg: 3,
    isExpress: true,
    isMember: true,
  })
);
```
