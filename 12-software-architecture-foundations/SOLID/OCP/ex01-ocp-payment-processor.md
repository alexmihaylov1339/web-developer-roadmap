# EX01 – Open/Closed Principle: Payment Processor

## Goal

Practice the **Open/Closed Principle (OCP)**:

> Software entities (classes, modules, functions, etc.) should be **open for extension** but **closed for modification**.

You will work with a simple payment processor that currently breaks OCP.

---

## Starting Code (ex01-before.js)

```js
class PaymentProcessor {
  pay(amount, method) {
    if (method === "card") {
      console.log(`Processing card payment: ${amount} EUR`);
      // card-specific logic here
    } else if (method === "paypal") {
      console.log(`Processing PayPal payment: ${amount} EUR`);
      // PayPal-specific logic here
    } else if (method === "bank-transfer") {
      console.log(`Processing bank transfer: ${amount} EUR`);
      // bank transfer-specific logic here
    } else {
      throw new Error("Unsupported payment method");
    }
  }
}

// Example usage:
const processor = new PaymentProcessor();
processor.pay(100, "card");
processor.pay(50, "paypal");
```
