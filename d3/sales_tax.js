let salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

let companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax() {

  let result = {};

  companySalesData.forEach((company) => {
    let transientRevenue = 0;
    for (let revenue of company.sales) {
      (!result[company.name]) ? result[company.name] = {totalSales: revenue, totalTaxes: 0} : result[company.name].totalSales += revenue;
      transientRevenue += revenue;
    }
  result[company.name]['totalTaxes'] += (transientRevenue * salesTaxRates[company.province]);
  });
  return result;
}

let taxSummary = calculateSalesTax();
console.log(taxSummary);