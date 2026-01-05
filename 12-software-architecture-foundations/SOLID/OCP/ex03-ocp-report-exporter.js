class JsonExporter {
  export(report) {
    console.log("Exporting report as JSON");
    const json = JSON.stringify(report, null, 2);
    console.log(json);
    return json;
  }
}

class CsvExporter {
  export(report) {
    console.log("Exporting report as CSV");
    const headers = Object.keys(report[0]).join(",");
    const rows = report.map((row) => Object.values(row).join(","));
    const csv = [headers, ...rows].join("\n");
    console.log(csv);

    return csv;
  }
}

class TxtExporter {
  export(report) {
    console.log("Exporting report as TXT");
    const lines = report.map((row) => JSON.stringify(row));
    const txt = lines.join("\n");
    console.log(txt);

    return txt;
  }
}

class ReportExporter {
  constructor(exporter) {
    this.exporter = exporter;
  }

  setExporter(exporter) {
    this.exporter = exporter;
  }

  export(report) {
    return this.exporter.export(report);
  }
}

const jsonExporter = new JsonExporter();
const csvExporter = new CsvExporter();
const txtExporter = new TxtExporter();

const report = [
  { id: 1, name: "Alice", score: 85 },
  { id: 2, name: "Bob", score: 92 },
];

const reportExporter = new ReportExporter(jsonExporter);
reportExporter.export(report);

reportExporter.setExporter(csvExporter);
reportExporter.export(report);

reportExporter.setExporter(txtExporter);
reportExporter.export(report);
