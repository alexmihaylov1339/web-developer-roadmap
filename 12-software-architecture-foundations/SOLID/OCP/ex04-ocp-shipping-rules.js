const contriesBaseRates = {
  BG: 5,
  DE: 8,
  CH: 12,
};

const surchargeWeight = 5; // kg
const weightSurchargeAmount = 5; // $
const expressSurchargeAmount = 10; // $
const bigOrderItemsTotalNumber = 100;
const freeOrderThreshold = 0; // $
const memberDiscountRate = 0.9; // 10%

const getContryBaseRate = ({country}) => {
  console.log(country);
  const rate = contriesBaseRates[country];

  if (rate === undefined) {
    throw new Error("Unsupported country");
  }

  return rate;
}

const addWeightSurcharge = ({weightKg, cost}) => {
  if (weightKg > surchargeWeight) {
    return cost + weightSurchargeAmount;
  }

  return cost;
}

const addExpressSurcharge = ({isExpress, cost}) => {
  if (isExpress) {
    return cost + expressSurchargeAmount;
  }

  return cost;
}

const bigOrderDiscount = ({itemsTotal, cost}) => {
  if (itemsTotal >= bigOrderItemsTotalNumber) {
    return freeOrderThreshold;
  }

  return cost;
}

const applyMemberDiscount = ({isMember, cost}) => {
  if (isMember && cost > freeOrderThreshold) {
    return cost * memberDiscountRate;
  }

  return cost;
}

const chargingRules = [
  getContryBaseRate,
  addWeightSurcharge,
  addExpressSurcharge,
  bigOrderDiscount,
  applyMemberDiscount,
];

class ShippingService {
  calculate(order) {
    const { country, itemsTotal, weightKg, isExpress, isMember } = order;

    let cost = 0;

    for (const rule of chargingRules) {
      cost = rule({ country, itemsTotal, weightKg, isExpress, isMember, cost });
    }

    return cost;
  }
}

const shippingService = new ShippingService();
const order = {
  country: "DE",
  itemsTotal: 10,
  weightKg: 6,
  isExpress: true,
  isMember: true,
};
const cost = shippingService.calculate(order);
console.log(`Shipping cost: $${cost}`);
