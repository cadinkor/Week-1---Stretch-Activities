// https://github.com/adriandgr/market
// https://github.com/emaxet/w1d5_exercises/blob/master/stock_market/max_profit.js
  
function maxProfit(stockPrices) {
  let stockData = {};
  let potentialProfits = [];
  for (let i = 0; i < stockPrices.length; i++) {
    stockData[stockPrices[i]] = i;
  }
  for (let key in stockData) {
    for (let i = 0; i < stockPrices.length; i++) {
      if ((key - stockPrices[i]) > 0 && stockData[key] > i) {
        potentialProfits.push(key - stockPrices[i]);
      }
    }
  }
  potentialProfits.sort((a, b) => {
    return b - a;
  });
  console.log(potentialProfits[0]);
}

maxProfit([45, 24, 35, 31, 40, 38, 11]);