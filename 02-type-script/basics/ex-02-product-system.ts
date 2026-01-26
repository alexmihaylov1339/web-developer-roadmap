interface Product {
    readonly id:number;
    name: string;
    price: number;
    currency: 'EUR' | 'USD';
    description?: string;
    inStock: boolean;
};

interface Discount {
    type: 'percentage' | 'fixed';
    value: number;
};

interface PriceCalculator {
    calculatePrice(product: Product): number;
};

const createProduct = (product: Product): Product => {
    return product;
};