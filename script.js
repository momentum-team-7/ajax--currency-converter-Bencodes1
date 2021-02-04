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

const rootElement = document.querySelector('.container')
const currTest = document.querySelector('.currencies')
console.log(currTest)

function fillDropdowns(){
  let dropdownA = document.querySelector("#currency-a-dropdown")
  let dropdownB = document.querySelector("#currency-b-dropdown")
  for(let i = 0; i < currencies.length; i++) {
    let optionA = document.createElement("option")
    let optionB = document.createElement("option")
    optionA = currencies[i]
    optionB = currencies[i]
    console.log(currencies[i])
    dropdownA.appendChild(optionA)
    dropdownB.appendChild(optionB)
  }
}

let dropdowns = document.querySelectorAll("select")
let convertButton = document.querySelector("button")

fillDropdowns()

let currA = 'CAD'
let currB = 'HKD'
let amount = 2.5


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
      // moneySection.innerHTML = `<p>${finalConvert}</p>`
      return finalConvert
  })
}

convert(currA, currB, amount)