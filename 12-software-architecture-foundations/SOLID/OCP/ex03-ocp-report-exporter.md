# EX03 – Open/Closed Principle: Report Exporter

## Goal

Practice the **Open/Closed Principle (OCP)** with a more realistic, multi-format export case.

You’ll refactor a report exporter that currently breaks OCP by using `if / else` for each export type.

---

## Starting Code

```js
class ReportExporter {
  export(report, format) {
    if (format === "json") {
      console.log("Exporting report as JSON");
      const json = JSON.stringify(report, null, 2);
      console.log(json);
      return json;
    } else if (format === "csv") {
      console.log("Exporting report as CSV");
      const headers = Object.keys(report[0]).join(",");
      const rows = report.map((row) => Object.values(row).join(","));
      const csv = [headers, ...rows].join("\n");
      console.log(csv);
      return csv;
    } else if (format === "txt") {
      console.log("Exporting report as TXT");
      const lines = report.map((row) => JSON.stringify(row));
      const txt = lines.join("\n");
      console.log(txt);
      return txt;
    } else {
      throw new Error("Unsupported export format");
    }
  }
}

// Example usage:
const report = [
  { id: 1, name: "Alice", score: 90 },
  { id: 2, name: "Bob", score: 85 },
];

const exporter = new ReportExporter();
exporter.export(report, "json");
exporter.export(report, "csv");
```
