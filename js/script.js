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

    const onFormSubmit = (event) => {
        event.preventDefault();


        const amountPlnElement = document.querySelector(".js-amountPln");
        const resultElement = document.querySelector(".js-result");
        const amountPln = amountPlnElement.value;
        const exchangeRate = exchangeRateElement.value;
        const result = calculateResult(amountPln, exchangeRate)

        resultElement.innerHTML = `Za ${amountPln} PLN otrzymasz <strong> ${result.toFixed(2)} ${currency} </strong>`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const currencyElement = document.querySelector(".js-currencySelect");
        const exchangeRateElement = document.querySelector(".js-exchangeRate");
        const currency = currencyElement.value;


        formElement.addEventListener("input", (event) => {
            displayCurrentRate(event.target.value, exchangeRateElement);
        });

        formElement.addEventListener("submit", onFormSubmit);

        formElement.addEventListener("reset", (event) => {
            resultElement.innerHTML = `Za x PLN otrzymasz`;
        });
    };
    
    init();

}