const button = document.getElementById('convert-button')
const select = document.getElementById('select')



const convertValues = async () => {
  const realValue = document.getElementById('input').value
  const convertedValue = document.getElementById('converted-value')
  const originalValue = document.getElementById('original-value')

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitCoin = data.BTCBRL.high

  const resultDolar = realValue / dolar
  const resultEuro = realValue / euro
  const resultBitCoin = realValue / bitCoin


  originalValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(realValue)

  if (select.value === "€ Euro") {
    convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(resultEuro)
  } else if (select.value === "US$ Dólar Americano") {
    convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(resultDolar)
  } else {
    convertedValue.innerHTML = resultBitCoin.toFixed(6)
  }

}

const currency = () => {
  const coinImage = document.getElementById('coin-img')
  const coinName = document.getElementById('coin-name')


  if (select.value === "€ Euro") {
    coinName.innerHTML = "Euro"
    coinImage.src = "./assets/euro.png"
  } else if (select.value === "US$ Dólar Americano") {
    coinName.innerHTML = "Dólar Americano"
    coinImage.src = "./assets/estados-unidos.png"
  } else {
    coinName.innerHTML = "Bitcoin"
    coinImage.src = "./assets/bitcoin.png"
  }
  convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', currency)
