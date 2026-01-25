# TypeScript Interfaces — Exercise 1 (Beginner)

## Goal

Practice defining and using **interfaces** to type objects and function parameters.

---

## Instructions

1. Create an interface `User` with:
   - `id` (number)
   - `name` (string)
   - `email` (string)
   - `isActive` (boolean)

2. Create **two** users that match the interface:
   - `user1`
   - `user2`

3. Write a function `formatUser(user: User): string` that returns a string like:
   - `"1: Aleksandar (aleks@site.com) - active"`
   - If `isActive` is false, it should say `"inactive"`.

4. Write a function `toggleUserActive(user: User): User` that returns a **new object** (don’t mutate) with `isActive` flipped.

5. Log:
   - `formatUser(user1)`
   - `formatUser(toggleUserActive(user1))`
   - `formatUser(user2)`

---

## Starter code (copy/paste)

> Fill the `TODO`s only.

```ts
// Exercise 1: Interfaces Basics

// TODO 1: Create interface User

interface User {
  id: number,
  name: string,
  email: string,
  isActive: boolean
}

const user1: User = {
  id: 1,
  name: 'Alex M'
  email: 'alexandermihaylov@gmail.com',
  isActive: true
}

const user2: User = {
  id: 2,
  name: 'Deny A',
  email: 'deny@gmail.com',
  isActive: true
}

const formatUser = (user: User):string => {
  const {name, id, email, isActive} = user;
  const formatedUser = `${id}: ${name} (${email}) - ${isActive}`

  return formatedUser;
}

const toggleIsUserActive = (user:User):User => {
  const newUser = {
    ...user,
    isActive: !user.isActive
  }

  return newUser;
}

// TODO 5: Console logs
```
