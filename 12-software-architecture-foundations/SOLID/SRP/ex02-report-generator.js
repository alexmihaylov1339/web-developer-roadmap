class Report {
  generate(data) {
    const content = `Report content: ${data}`;
    console.log("Generating report:", content);

    return content;
  }
}

class ReportService {
  saveToFile(report) {
    console.log("Saving report to file:", report);
  }
}

// Example usage:
const report = new Report();
const content = report.generate("Monthly revenue data");

const reportService = new ReportService();
reportService.saveToFile(content);
