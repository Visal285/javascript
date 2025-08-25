let prices = [10, 20, 30, 40];
let discountedPrices = prices.map(price => price * 0.8);
console.log(discountedPrices);

discountedPrices.forEach((discountedPrices) => {
    console.log("Discounted price: " + discountedPrices + "$")});
