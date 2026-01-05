# EX02 – Liskov Substitution Principle: Rectangle vs Square (Harder)

## Goal

Practice **Liskov Substitution Principle (LSP)** with a classic _real-world_ trap:

> If `Square` is a subtype of `Rectangle`, it must be usable anywhere a `Rectangle` is expected **without breaking behavior**.

This exercise focuses on **method contracts and invariants**.

---

## Starting Code

```js
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width; // keep square invariant
  }

  setHeight(height) {
    this.width = height; // keep square invariant
    this.height = height;
  }
}

function resizeToWidth(rect, newWidth) {
  const oldHeight = rect.height;

  rect.setWidth(newWidth);

  if (rect.height !== oldHeight) {
    throw new Error("LSP broken: height changed when only width was set!");
  }

  return rect.area();
}

// Example usage:
console.log(resizeToWidth(new Rectangle(10, 5), 20)); // OK
console.log(resizeToWidth(new Square(10, 10), 20)); // 🔥 should fail
```
