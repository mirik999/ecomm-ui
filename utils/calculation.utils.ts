export function calculateSale(price: number, saleCount: number): string {
  const remain = (price * saleCount) / 100;
  return (price - remain).toFixed(2);
}

export function calculateTotalSumOfProducts(products: any): string {
  return products.reduce((prev: any, curr: any) => prev + curr.price, 0).toFixed(2);
}
