# Final Learning Exercise: Advanced SOLID Design (Hard)

## Goal

Design a system that:

- obeys **Liskov Substitution Principle (LSP)**
- obeys **Interface Segregation Principle (ISP)**
- avoids inheritance traps
- models real business rules honestly
- remains easy to extend without breaking existing code

This exercise intentionally has **no single “correct” solution** — only better or worse designs.

---

## Problem Context

You are designing a **multi-channel communication system** for a product.

The system must support:

- Email
- SMS
- Push Notifications
- In-App Messages

Each channel has different **capabilities and constraints**.

---

## Business Rules

### Sending

- All channels can send messages

### Scheduling

- Email and Push can be scheduled
- SMS cannot be scheduled
- In-App messages are immediate only

### Cancelling

- Only scheduled messages can be cancelled
- Already sent messages cannot be cancelled

### Tracking

- Email and Push return a `messageId`
- SMS does NOT return a `messageId`
- In-App messages return a `viewId`

---

## Initial Naive Design (Intentionally Wrong)

```js
class Message {
  send() {}
  schedule(date) {}
  cancel() {}
  getId() {}
}
```
