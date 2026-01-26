# TypeScript Interfaces — Exercise 2 (Beginner → Lower Intermediate)

## Goal
Learn:
- Optional properties
- Readonly properties
- Interfaces for functions
- Nested objects

---

## Scenario
You are modeling a **product system** for an online store.

---

## Instructions

### 1️⃣ Create interface `Product`

It must have:

- `id` → **readonly** number  
- `name` → string  
- `price` → number  
- `currency` → `"EUR" | "USD"` (union type)  
- `description` → optional string  
- `inStock` → boolean  

---

### 2️⃣ Create interface `Discount`

- `type` → `"percentage" | "fixed"`
- `value` → number

---

### 3️⃣ Update `Product`

Add an **optional** property:

```ts
discount?: Discount
