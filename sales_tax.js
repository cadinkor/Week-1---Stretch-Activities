const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
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

const calculateSalesTax = function(salesData, taxRates) {

  let results = {}
  for (company in companySalesData){
    let totalSales = companySalesData[company].sales.reduce(function(a,b){
      return a + b
    })

    return totalSales

  let taxes = totalSales * taxRates[salesData[company].province]
  let companyName = companySalesData[company].name

  

//   totalSales = 
//   totalTaxes = 
// }

// const calculateSalesTax = function (companySalesData){
//   let sumSales = 0;

//   companySalesData.forEach(element => {
//     console.log(element.name)
//   })
}
}