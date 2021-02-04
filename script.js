const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

// const rootElement = document.querySelector('.container')
// const currTest = document.querySelector('.currencies')
// console.log(currTest)

  // fetch(urlTest)
  // .then(response => response.json())
  // .then(data => {
  //   console.log('working?', data.rates.AUD)
  //   const czk2AUD = data.rates.AUD
  //   console.log(czk2AUD)
  //   currTest.innerHTML = `<p>${czk2AUD}</p>`
  // })


// Structure of program:
// 1. Get 2 country codes (placeholders CZK and AUD)
// 2. Get quantity (placeholder x=2)
// 3. make a call for country b's rate in country a data
// 4. multiply country a by x and rate 

// Structure of code: 
// 1-4, then mess with inputs etc

let currA = 'CAD'
let currB = 'HKD'
let amount = 2.5

convert(currA, currB, amount)

function convert(currA, currB, amount){
  let urlFetch = 'https://api.exchangeratesapi.io/latest?base=' + currA
  console.log(urlFetch)

  const moneySection = document.querySelector('.currencies')
    fetch(urlFetch)
    .then(response => response.json())
    .then(data => {
      let xRate = data.rates[currB]
      console.log('Amount:', amount, " at rate of ", xRate)
      let finalConvert = amount * xRate
      console.log("Total: ", finalConvert)
      moneySection.innerHTML = `<p>${finalConvert}</p>`
      return finalConvert
  })
}
