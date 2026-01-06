# Interface Segregation Principle — Exercise 1 (Very Easy)

## Goal
Practice identifying a violation of the **Interface Segregation Principle (ISP)** and refactoring it into smaller, more focused interfaces.

> **Interface Segregation Principle (ISP)**  
> Clients should not be forced to depend on methods they do not use.

---

## Scenario

You are working on a simple application that handles different types of devices.

Even though JavaScript does not have interfaces, the concept still applies by using:
- abstract base classes
- documentation-level contracts
- small, focused behaviors

---

## imagine the following implementations:

A Printer can:

turn on

turn off

print

A Scanner can:

turn on

turn off

scan

## Current (Problematic) Design

```js
class Device {
  turnOn() {
    throw new Error('Not implemented');
  }

  turnOff() {
    throw new Error('Not implemented');
  }

  print(document) {
    throw new Error('Not implemented');
  }

  scan() {
    throw new Error('Not implemented');
  }
}

