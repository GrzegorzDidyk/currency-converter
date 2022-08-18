{
    const displayCurrentRate = (currency, exchangeRateElement) => {
        const euroRate = 4.7241;
        const dolarRate = 4.2193;
        const funtRate = 5.6593;
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
    };

    const calculateResult = (amountPln, exchangeRate) => {
        return amountPln / exchangeRate;
    };

    const updateResultText = (amountPln, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `Za ${amountPln} PLN otrzymasz <strong> ${result.toFixed(2)} ${currency} </strong>`;
    };

    const onFormSubmit = (event, exchangeRateElement) => {
        event.preventDefault();
        const amountPlnElement = document.querySelector(".js-amountPln");
        const currencyElement = document.querySelector(".js-currencySelect");
        const amountPln = amountPlnElement.value;
        const exchangeRate = exchangeRateElement.value;
        const result = calculateResult(amountPln, exchangeRate);
        const currency = currencyElement.value;

        updateResultText(amountPln, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const exchangeRateElement = document.querySelector(".js-exchangeRate");

        formElement.addEventListener("input", (event) => {
            displayCurrentRate(event.target.value, exchangeRateElement);
        });

        formElement.addEventListener("submit", (event) => {
            onFormSubmit(event, exchangeRateElement);
        });

        formElement.addEventListener("reset", (event) => {
            resultElement.innerHTML = `Za x PLN otrzymasz`;
        });
    };
    init();
}