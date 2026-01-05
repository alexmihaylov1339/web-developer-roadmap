# Learning Exercise: Liskov Substitution Principle (LSP)

## Goal of This Exercise

Understand **why inheritance can be dangerous** when subclasses do not fully respect
the contract of the base class.

This example helped me see **how runtime bugs appear even when code “looks correct.”**

---

## Base Class: PaymentMethod

```js
class PaymentMethod {
  /**
   * Contract:
   * - charge(amount) takes a positive amount and returns a receiptId (string)
   * - refund(receiptId) always succeeds if receiptId is valid and returns true
   */
  charge(amount) {
    if (amount <= 0) throw new Error("amount must be positive");
    return "rcpt_" + Math.random().toString(16).slice(2);
  }

  refund(receiptId) {
    if (!receiptId) throw new Error("receiptId required");
    return true;
  }
}
```
