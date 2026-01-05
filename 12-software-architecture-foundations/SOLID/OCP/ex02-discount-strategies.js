class NoneDiscount {
  apply(total) {
    return total;
  }
}

class BlackFridayDiscount {
  apply(total) {
    return total * 0.7;
  }
}

class VipDiscount {
  apply(total) {
    return total * 0.8;
  }
}

class CouponDiscount {
  apply(total) {
    if (total > 50) {
      return total - 10;
    }
    return total;
  }
}

class DiscountService {
  constructor(orderType) {
    this.orderType = orderType;
  }

  calculateTotal(order) {
    let total = 0;

    for (const item of order.items) {
      total += item.price * item.quantity;
    }

    total = this.orderType.apply(total);

    return total;
  }
}

const noneDiscount = new NoneDiscount();
const blackFridayDiscount = new BlackFridayDiscount();
const vipDiscount = new VipDiscount();
const couponDiscount = new CouponDiscount();

const regularOrderService = new DiscountService(noneDiscount);
const blackFridayOrderService = new DiscountService(blackFridayDiscount);
const vipOrderService = new DiscountService(vipDiscount);
const couponOrderService = new DiscountService(couponDiscount);

const order = {
  items: [
    { name: "Item A", price: 30, quantity: 1 },
    { name: "Item B", price: 25, quantity: 1 },
  ]
};

console.log("Regular Order Total:", regularOrderService.calculateTotal(order)); // 55
console.log("Black Friday Order Total:", blackFridayOrderService.calculateTotal(order)); // 38.5
console.log("VIP Order Total:", vipOrderService.calculateTotal(order)); // 44
console.log("Coupon Order Total:", couponOrderService.calculateTotal(order)); // 45
