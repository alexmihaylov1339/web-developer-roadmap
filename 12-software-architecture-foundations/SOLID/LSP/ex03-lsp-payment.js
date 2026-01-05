class PaymentMethod {
  /**
   * Contract:
   * - charge(amount) takes a positive amount and returns a receiptId (string)
   * - refund(receiptId) always succeeds if receiptId is valid and returns true
   */
  charge(amount) {
    if (amount <= 0) {
      throw new Error("amount must be positive");
    }

    return "rcpt_" + Math.random().toString(16).slice(2);
  }
}

class RefundablePaymentMethod extends PaymentMethod {

    refund(receiptId) {
    if (!receiptId) {
      throw new Error("receiptId required");
    }

    return true;
  }
  // inherits behavior (OK)
}

class CardPayment extends RefundablePaymentMethod {
  // inherits behavior (OK)
}

class StoreCreditPayment extends PaymentMethod {
  /**
   * Store credit is final once used — refunds are not supported.
   * This violates the base contract that refund() succeeds for a valid receiptId.
   */
}

// Client code depends on PaymentMethod contract:
const checkout = (payment, amount) => {
  return payment.charge(amount);
};

const checkoutAndRefund = (payment, amount) => {
  const receiptId = payment.charge(amount);

  return payment.refund(receiptId);
};

// Demo:
console.log(checkoutAndRefund(new CardPayment(), 50));        // true
console.log(checkout(new StoreCreditPayment(), 50)); // 🔥 should fail
