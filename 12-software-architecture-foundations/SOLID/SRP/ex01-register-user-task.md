# EX01 – SRP Basics: Split Responsibilities

## Goal

Understand the **Single Responsibility Principle (SRP)** by splitting one function that does too many things into smaller, focused ones.

## Given (starting point)

You have a function that:

- validates a user
- saves the user to the "database" (for now, just `console.log`)

```js
function registerUser(user) {
  if (!user.email.includes("@")) {
    throw new Error("Invalid email");
  }
  console.log("Saving to database:", user);
}
```
