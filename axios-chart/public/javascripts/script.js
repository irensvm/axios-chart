document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

const key = '8K1PSMRABN4W7GFN';
const functionName = 'TIME_SERIES_DAILY';


const canvasArray = document.querySelectorAll("canvas")

canvasArray.forEach(canvas => {
  const symbolName = canvas.id;
  const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&symbol=${symbolName}&apikey=${key}`;
  axios
    .get(apiUrl)
    .then(responseFromAPI => {
      printTheChart(responseFromAPI.data, symbolName); // <== call the function here where you used to console.log() the response
    })
    .catch(err => console.log('Error while getting the data: ', err));
})

function printTheChart(stockData, acronimo) {
  const dailyData = stockData['Time Series (Daily)'];

  const stockDates = Object.keys(dailyData);
  const stockPrices = stockDates.map(date => dailyData[date]['4. close']);

  const ctx = document.getElementById(acronimo).getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockDates,
      datasets: [{
        label: 'Stock Chart',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: stockPrices
      }]
    }
  }); // closes chart = new Chart()
} // closes printTheChart()