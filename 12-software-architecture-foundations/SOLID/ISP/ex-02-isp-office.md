# ISP — Exercise 2 (Bad Version)

This code **works in some cases**, but it **violates the Interface Segregation Principle (ISP)**.

Your task (later) will be to refactor it so that **clients depend only on the capabilities they actually use**.

---

## Device Capabilities (Already OK)

These are small, focused capability mixins.  
⚠️ **Do NOT change these** — they are correct.

```js
const powerable = (name) => ({
  turnOn() {
    console.log(`Turning on the ${name}`);
  },
  turnOff() {
    console.log(`Turning off the ${name}`);
  },
});

const printable = (name) => ({
  print(document) {
    console.log(`Printing "${document}" on the ${name}`);
  },
});

const scannable = (name) => ({
  scan(document) {
    console.log(`Scanning "${document}" on the ${name}`);
  },
});

// ❌ Bad Client Code (This Is the Problem)

function createOffice(device) {
  // ❌ Office depends on EVERYTHING: power + print + scan

  return {
    printAndShutdown(document) {
      device.turnOn();
      device.print(document);   // 💥 crashes if device can't print
      device.turnOff();
    },

    scanAndShutdown(document) {
      device.turnOn();
      device.scan(document);    // 💥 crashes if device can't scan
      device.turnOff();
    },
  };
}
