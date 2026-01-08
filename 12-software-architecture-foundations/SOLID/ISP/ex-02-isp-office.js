const powerable = (name) => ({
    turnOn() {
        console.log(`Turning on the ${name}`);
    },
    turnOff() {
        console.log(`Turning off the ${name}`);
    }
});

const printable = (name) => ({
    print(document) {
        console.log(`Printing ${document} on the ${name}`);
    }
});

const scannable = (name) => ({
    scan(document) {
        console.log(`Scanning ${document} on the ${name}`);
    }
});

const createPrinter = (printer = 'Printer') => {
    return Object.assign({ name: printer }, powerable(printer), printable(printer));
}

const createScanner = (scanner = 'Scanner') => {

    return Object.assign({ name: scanner }, powerable(scanner), scannable(scanner));
}

const createAllInOneDevice = (device = 'All-in-One Device') => {

    return Object.assign(
        { name: device },
        powerable(device),
        printable(device),
        scannable(device)
    );
}


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

function printAndShutdown(device, document) {
    device.turnOn();
    device.print(document);
    device.turnOff();
}

function scanAndShutdown(device, document) {
    device.turnOn();
    device.scan(document);
    device.turnOff();
}

const printer = createPrinter();
Object.assign(printer, { printAndShutdown });
const scanner = createScanner();
const allInOne = createAllInOneDevice();

printer.printAndShutdown('My Document');