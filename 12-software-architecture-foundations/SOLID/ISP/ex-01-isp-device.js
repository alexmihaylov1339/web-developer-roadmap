class Device {
  turnOn() {
    throw new Error('Not implemented');
  }

  turnOff() {
    throw new Error('Not implemented');
  }
}

class Printer extends Device {
  turnOn() {
    console.log('Printer is turned on');
  }

  turnOff() {
    console.log('Printer is turned off');
  }

  print(document) {
    console.log('Printing document:', document);
  }
}

class Scanner extends Device {
    turnOn() {
    console.log('Scanner is turned on');
  }

  turnOff() {
    console.log('Scanner is turned off');
  }

  scan() {
    console.log('Scanning document');
  }
}