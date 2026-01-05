class CardPayment {
  pay(amount) {
    console.log(`Processing card payment: ${amount} EUR`);
    // card-specific logic here
  }
}

class PayPalPayment {
  pay(amount) {
    console.log(`Processing PayPal payment: ${amount} EUR`);
    // PayPal-specific logic here
  }
}

class BankTransferPayment {
  pay(amount) {
    console.log(`Processing bank transfer: ${amount} EUR`);
    // bank transfer-specific logic here
  }
}

class PaymentProcessor {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  pay(amount) {
    this.paymentMethod.pay(amount);
  }
}

// Example usage:
const cardPayment = new CardPayment();
const paypalPayment = new PayPalPayment();
const bankTransferPayment = new BankTransferPayment();

const cardProcessor = new PaymentProcessor(cardPayment);
cardProcessor.pay(100);

const paypalProcessor = new PaymentProcessor(paypalPayment);
paypalProcessor.pay(150);

const bankTransferPaymentProcessor = new PaymentProcessor(bankTransferPayment);
bankTransferPaymentProcessor.pay(200);
