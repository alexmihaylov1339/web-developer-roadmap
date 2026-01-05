# EX03 – SRP Todo Manager

## Goal

Design classes that respect SRP from the beginning:
one class manages todos, another displays them.

## Description

Create a small Todo system. You must separate:

**Business logic** vs **Presentation logic**

---

## Starting requirements

- One class must manage todos (add, remove, list)
- Another class must handle displaying todos (console output is enough)

---

## Task

Create two classes:

1. `TodoService`

   - Stores todo items
   - Add a todo
   - Remove a todo
   - Return all todos

2. `TodoRenderer`
   - Displays todos (e.g., with `console.log`)
   - Must not modify data

Then write an example that:

- Adds at least 2 todos
- Renders the list

---

## Files to submit
