# EX01 – Liskov Substitution Principle: Birds & Flying

## Goal

Understand the **Liskov Substitution Principle (LSP)**:

> Objects of a superclass should be replaceable with objects of a subclass
> **without breaking the correctness of the program**.

This exercise focuses on **behavioral compatibility**, not syntax.

---

## Starting Code

```js
class Bird {
  fly() {
    console.log("Flying...");
  }
}

class Sparrow extends Bird {
  fly() {
    console.log("Sparrow flying");
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Ostriches cannot fly!");
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

// Example usage:
makeBirdFly(new Sparrow());
makeBirdFly(new Ostrich());
```
