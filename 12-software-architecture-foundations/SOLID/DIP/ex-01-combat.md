# 🕹️ SOLID – D (Dependency Inversion) Exercise

## Turn-Based Combat Game Engine

We are building a **mini game engine** where a hero fights a monster.

The goal of this exercise is to practice **Dependency Inversion (D in SOLID)**.

---

## 🧠 What does Dependency Inversion mean (like you're 10 years old)

The _brain_ of the game (the combat rules) should NOT care:

- how randomness works
- how logs are printed
- where output goes

It should only say:

> “Hey Random Machine, give me a number.”
> “Hey Logger, write this message.”

It must NOT know if:

- randomness comes from `Math.random`
- randomness comes from a fake predictable generator
- logs go to console or to memory

The brain talks only to **interfaces (abstractions)**.

---

# 🎮 Game Rules

A **Hero** fights a **Monster**.
