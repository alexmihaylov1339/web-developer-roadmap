const availableDiscounts = [{
  discountCode: 'SUMMER10',
  discountPercentage: .9
}]

const validateOrder = (order) => {
  if (!order.items || order.items.length === 0) {
    throw new Error("Order must have at least one item");
  }

  if (!order.customerEmail) {
    throw new Error("Order must have a customer email");
  }
}

const applyDiscountCode = (order, availableDiscounts, total) => {
  const discount = availableDiscounts.find(d => d.discountCode === order.discountCode)

  if(discount) {
    return total * discount.discountPercentage;
  }

  return total;
}

const calculateTotalPrice = (order) => {
  let total = 0;
  for (const item of order.items) {
    total += item.price * item.quantity;
  }

  total = applyDiscountCode(order, availableDiscounts, total);

  return total;
}

const saveOrder = (order) => {
  console.log("Saving order to database:", order);
}

const sendConfirmationEmail = (order, total) => {
  console.log(`Sending email to ${order.customerEmail} with total ${total}`);
}

class OrderService {
  create(order) {
    // 1. Validate order
    validateOrder(order);

    // 2. Calculate total price
    const total = calculateTotalPrice(order);

    console.log("Calculated total price:", total);

    // 3. Save to "database"
    saveOrder(order);

    // 4. Send confirmation email
    sendConfirmationEmail(order, total);
  }
}

// Example usage:
const service = new OrderService();
service.create({
  items: [
    { name: "Item A", price: 10, quantity: 2 },
    { name: "Item B", price: 5, quantity: 1 },
  ],
  customerEmail: "customer@example.com",
  discountCode: "SUMMER10",
});
