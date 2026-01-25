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

const asPowerable = (device) => {
    if (device.turnOn && device.turnOff) {
        return {
            turnOn: () => device.turnOn(),
            turnOff: () => device.turnOff()
        }
    }

    throw new Error('Device does not support powering on/off');
}

const asPrintable = (device) => {
    if (device.print) {
        return {
            print: (document) => device.print(document)
        }
    }

    throw new Error('Device does not support printing');
}

const asScannable = (device) => {
    if (device.scan) {
        return {
            scan: (document) => device.scan(document)
        }
    }

    throw new Error('Device does not support scanning');
};

const createPrintService = (printPort, powerPort) => ({
    printAndTurnOff(document) {
        powerPort.turnOn();
        printPort.print(document);
        powerPort.turnOff();
    }
});

const createScanService = (scanPort, powerPort) => ({
    scanAndTurnOff(document) {
        powerPort.turnOn();
        scanPort.scan(document);
        powerPort.turnOff();
    }
});

const printer = createPrinter();
const scanner = createScanner();
const allInOne = createAllInOneDevice();

const printerPower = asPowerable(printer);
const printerPrint = asPrintable(printer);
const printerPrintService = createPrintService(printerPrint, printerPower);
printerPrintService.printAndTurnOff('My Document');

const scannerPower = asPowerable(scanner);
const scannerScan = asScannable(scanner);
const scannerScanService = createScanService(scannerScan, scannerPower);
scannerScanService.scanAndTurnOff('My Document');

const allInOnePower = asPowerable(allInOne);
const allInOnePrint = asPrintable(allInOne);
const allInOneScan = asScannable(allInOne);

const allInOnePrintService = createPrintService(allInOnePrint, allInOnePower);
allInOnePrintService.printAndTurnOff('My Document');

const allInOneScanService = createScanService(allInOneScan, allInOnePower);
allInOneScanService.scanAndTurnOff('My Document');
