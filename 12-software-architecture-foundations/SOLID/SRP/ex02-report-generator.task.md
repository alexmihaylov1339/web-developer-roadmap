# EX02 – SRP with Classes: Report Generator

## Goal

Practice applying the **Single Responsibility Principle (SRP)** by identifying and removing multiple responsibilities from one class.

## Description

The class below violates SRP because it is responsible for:

- generating report content
- saving the report to a file

Your task is to refactor it so each responsibility is isolated properly.

---

## Starting Code (ex02-before.js)

```js
class Report {
  generate(data) {
    const content = `Report content: ${data}`;
    console.log("Generating report:", content);
    return content;
  }

  saveToFile(report) {
    console.log("Saving report to file:", report);
  }
}

// Example usage:
const report = new Report();
const content = report.generate("Monthly revenue data");
report.saveToFile(content);
```
