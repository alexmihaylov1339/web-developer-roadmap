# Interface Segregation Principle — Exercise 3 (Medium)

## Goal

Apply ISP in a more realistic scenario where **new capabilities appear** and a **job queue** processes mixed tasks.
You must prevent a “god client” and avoid passing “all-in-one” objects everywhere.

---

## Scenario

Your office system grows. Now there are **4 capabilities**:

- **Powerable**: `turnOn()`, `turnOff()`
- **Printable**: `print(document)`
- **Scannable**: `scan(document)`
- **Faxable**: `fax(number, document)`

And **4 devices**:

1. **Printer**

   - power + print

2. **Scanner**

   - power + scan

3. **FaxMachine**

   - power + fax

4. **AllInOne**
   - power + print + scan
   - (Important: does NOT fax)

You also have a new requirement:

## New Requirement — Job Queue

Jobs come in as objects and are processed one by one.

Examples:

/\*\*

- ISP — Exercise 3 (BAD STARTING POINT)
-
- This code works sometimes, but violates ISP heavily:
- - One big client depends on ALL capabilities (print/scan/fax/power)
- - It grows forever when new job types appear
- - Wrong device + job type crashes at runtime
-
- Your task later: refactor into ports/adapters + handlers + dispatcher.
  \*/

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

// ================== Device factories

const createPrinter = (name = 'Printer') =>
Object.assign({ name }, powerable(name), printable(name));

const createScanner = (name = 'Scanner') =>
Object.assign({ name }, powerable(name), scannable(name));

const createFaxMachine = (name = 'FaxMachine') =>
Object.assign({ name }, powerable(name), faxable(name));

const createAllInOneDevice = (name = 'All-In-One Device') =>
Object.assign({ name }, powerable(name), printable(name), scannable(name));
// IMPORTANT: AllInOne does NOT have fax capability

// ================== BAD CLIENT CODE (THIS IS THE PROBLEM)

function processJobs(device, jobs) {
// ❌ BAD: One function assumes everything exists and depends on all capabilities
// ❌ BAD: This grows forever (add more else-if for each job type)
// ❌ BAD: Wrong device/job combos crash at runtime

for (const job of jobs) {
device.turnOn();

    if (job.type === 'PRINT') {
      device.print(job.document); // 💥 crashes if device can't print
    } else if (job.type === 'SCAN') {
      device.scan(job.document); // 💥 crashes if device can't scan
    } else if (job.type === 'FAX') {
      device.fax(job.number, job.document); // 💥 crashes if device can't fax
    } else {
      throw new Error('Unknown job type: ' + job.type);
    }

    device.turnOff();

}
}

// ================== Demo

const printer = createPrinter('Office Printer');
const scanner = createScanner('Office Scanner');
const faxMachine = createFaxMachine('Office Fax');
const allInOne = createAllInOneDevice('Office All-In-One');

const jobs = [
{ type: 'PRINT', document: 'Invoice #1' },
{ type: 'SCAN', document: 'Contract A' },
{ type: 'FAX', number: '+359888123456', document: 'Signed deal' },
];

console.log('\n--- Running jobs on Printer (WILL CRASH when SCAN or FAX happens) ---');
try {
processJobs(printer, jobs);
} catch (err) {
console.log('EXPECTED CRASH:', err.message);
}

console.log('\n--- Running jobs on Scanner (WILL CRASH when PRINT or FAX happens) ---');
try {
processJobs(scanner, jobs);
} catch (err) {
console.log('EXPECTED CRASH:', err.message);
}

console.log('\n--- Running jobs on FaxMachine (WILL CRASH when PRINT or SCAN happens) ---');
try {
processJobs(faxMachine, jobs);
} catch (err) {
console.log('EXPECTED CRASH:', err.message);
}

console.log('\n--- Running jobs on All-In-One (WILL CRASH when FAX happens) ---');
try {
processJobs(allInOne, jobs);
} catch (err) {
console.log('EXPECTED CRASH:', err.message);
}
