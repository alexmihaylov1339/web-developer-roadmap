/**
 * ISP — Exercise 3 (BAD STARTING POINT)
 *
 * This code works sometimes, but violates ISP heavily:
 * - One big client depends on ALL capabilities (print/scan/fax/power)
 * - It grows forever when new job types appear
 * - Wrong device + job type crashes at runtime
 *
 * Your task later: refactor into ports/adapters + handlers + dispatcher.
 */

// ================== Capabilities (mixins)

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

const faxable = (name) => ({
  fax(number, document) {
    console.log(`Faxing "${document}" to ${number} from the ${name}`);
  },
});

const asPowerable = (device) => {
  if (device.turnOn && device.turnOff) {
    return {
      turnOn: () => device.turnOn(),
      turnOff: () => device.turnOff(),
    };
  }

  throw new Error('Device does not support powering on/off');
};

const asPriintable = (device) => {
  if(device.print) {
    return {
      print: (document) => device.print(document),
    };
  }

  throw new Error('Device does not support printing');
};

const asScanable = (device) => {
  if(device.scan) {
    return {
      scan: (document) => device.scan(document),
    };
  }

  throw new Error('Device does not support scanning');
}

const asFaxable = (device) => {
  if(device.fax) {
    return {
      fax: (number, document) => device.fax(number, document),
    };
  }

  throw new Error('Device does not support faxing');
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

const createFaxService = (faxPort, powerPort) => ({
  faxAndTurnOff(number, document) {
    powerPort.turnOn();
    faxPort.fax(number, document);
    powerPort.turnOff();
  }
});

const createPrinter = (printer = 'Printer') => {
  return Object.assign(
    { name: printer },
    powerable(printer),
    printable(printer)
  );
};

const createScanner = (scanner = 'Scanner') => {
  return Object.assign(
    { name: scanner },
    powerable(scanner),
    scannable(scanner)
  );
};

const createFaxMachine = (faxMachine = 'Fax Machine') => {
  return Object.assign(
    { name: faxMachine },
    powerable(faxMachine),
    faxable(faxMachine)
  );
};

const createAllInOneDevice = (device = 'All-in-One Device') => {
  return Object.assign(
    { name: device },
    powerable(device),
    printable(device),
    scannable(device),
    );
};

const printer = createPrinter();
const scanner = createScanner();
const faxMachine = createFaxMachine();
const allInOne = createAllInOneDevice();

const printService = createPrintService(
  asPriintable(printer),
  asPowerable(printer)
);

printService.printAndTurnOff('My Document');

const scanService = createScanService(
  asScanable(scanner),
  asPowerable(scanner)
);

scanService.scanAndTurnOff('My Document');

const faxService = createFaxService(
  asFaxable(faxMachine),
  asPowerable(faxMachine)
);

faxService.faxAndTurnOff('1234567890', 'My Document');

const allInOnePrintService = createPrintService(
  asPriintable(allInOne),
  asPowerable(allInOne)
);

allInOnePrintService.printAndTurnOff('My Document');

const allInOneScanService = createScanService(
  asScanable(allInOne),
  asPowerable(allInOne)
);

allInOneScanService.scanAndTurnOff('My Document');
