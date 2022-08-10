let formElement = document.querySelector(".js-form");
let euroRate = 4.7241;
let dolarRate = 4.2193;
let funtRate = 5.6593;
let currencyElement = document.querySelector(".js-currencySellect");
let exchangeRateElement = document.querySelector(".js-exchangeRate");
let amountPlnElement = document.querySelector(".js-amountPln");
let resultElement = document.querySelector(".js-result");


formElement.addEventListener("input", () => {
    let currency = currencyElement.value;
    switch (currency) {
        case "EUR":
            exchangeRateElement.value = euroRate;
            break;
        case "USD":
            exchangeRateElement.value = dolarRate;
            break;
        case "GBP":
            exchangeRateElement.value = funtRate;
            break;
        case "":
            exchangeRateElement.value = "";
            break;
    }
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amountPln = amountPlnElement.value;
    let exchangeRate = exchangeRateElement.value;
    let result = amountPln/exchangeRate;

    resultElement.innerHTML = `Za ${amountPln} PLN otrzymasz <strong> ${result.toFixed(2)} ${currency} </strong>`;
});

formElement.addEventListener("reset", (event) => {
    resultElement.innerHTML = `Za x PLN otrzymasz`;
});