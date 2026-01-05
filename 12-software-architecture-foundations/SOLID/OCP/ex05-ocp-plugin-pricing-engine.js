const VIP_DISCOUNT_RATE = 0.9; // 10%
const COUPON_CODE = "SAVE15"; // Example coupon code
const COUPON_DISCOUNT_AMOUNT = 15; // $15
const MINIMUM_AMOUNT_FOR_COUPON = 100; // $100
const BULKY_WEIGHT_KG = 10; // 10 kg
const BULKY_ITEM_FEE = 12; // $12
const WEEKEND_PROMO_DISCOUNT_RATE = 0.95; // 5%
const DEFAULT_TAX_RATE = 0.2; // 20%
const SKU_DISCOUNT_SKU = "A1"; // Example SKU for discount
const SKU_DISCOUNT_MIN_QUANTITY = 2; // 2 items
const SKU_DISCOUNT_AMOUNT = 7; // $7

const basePriceCalulation = ({items, cost}) => {
  let total = cost;

  for(const item of items) {
    const { price, quantity } = item;
    total += price * quantity;
  }

  return total;
}

const applyVipDiscount = ({isVip, cost}) => {
  if (isVip) {
    return cost * VIP_DISCOUNT_RATE;
  }

  return cost;
}

const applyCoustomerCoupon = ({couponCode, cost}) => {
  if (couponCode === COUPON_CODE && cost >= MINIMUM_AMOUNT_FOR_COUPON) {

    return cost - COUPON_DISCOUNT_AMOUNT;
  }

  return cost;
}

const applyBulkyItemFee = ({items, cost}) => {
  const hasBulky = items.some((item) => item.weightKg > BULKY_WEIGHT_KG);

  if (hasBulky) {
    return cost + BULKY_ITEM_FEE;
  }

  return cost;
}

const applyWeekendPromo = ({isWeekendPromo, cost}) => {
  if (isWeekendPromo) {
    return cost * WEEKEND_PROMO_DISCOUNT_RATE;
  }

  return cost;
}

const applyTax = ({cost}) => {
  return cost * (1 + DEFAULT_TAX_RATE);
}

const applySkuDiscount = ({items, cost}) => {
  for (const item of items) {
    if (item.sku === SKU_DISCOUNT_SKU && item.quantity >= SKU_DISCOUNT_MIN_QUANTITY) {
      return cost - SKU_DISCOUNT_AMOUNT;
    }
  }

  return cost;
}

const calculationPipeline = [
  {name: "basePriceCalulation", apply: basePriceCalulation, priority: 1},
  {name: "applyVipDiscount", apply: applyVipDiscount, priority: 2},
  {name: "applyCoustomerCoupon", apply: applyCoustomerCoupon, priority: 3},
  {name: "applyBulkyItemFee", apply: applyBulkyItemFee, priority: 4},
  {name: "applyWeekendPromo", apply: applyWeekendPromo, priority: 5},
  {name: "applyTax", apply: applyTax, priority: 7},
  {name: "applySkuDiscount", apply: applySkuDiscount, priority: 6},
];

class PricingEngine {
  calculate(cart) {
    const { items, customer, isWeekendPromo, couponCode } = cart;
    const {isVip} = customer;

    let subtotal = 0;

    const sortedSteps = calculationPipeline.toSorted((a, b) => b.priority - a.priority).reverse();

    for (const step of sortedSteps) {
      subtotal = step.apply({
        items,
        isVip,
        isWeekendPromo,
        couponCode,
        cost: subtotal
      });
    }

    return Number(subtotal.toFixed(2));
  }
}

const priceEngine = new PricingEngine();
const order = {
  items: [
    { price: 30, quantity: 2, weightKg: 5, sku: "A1" },
    { price: 20, quantity: 1, weightKg: 12, sku: "N/A" }
  ],
  customer: {
    isVip: true,
  },
  couponCode: "SAVE15",
  isWeekendPromo: true
};

const finalPrice = priceEngine.calculate(order);
console.log(`Final Price: $${finalPrice}`);
