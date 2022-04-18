
async function fetchAllCurrentlySupportedCurrencies() {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/codes`);
    let availableCurrencies = await response.json();
    return availableCurrencies;
}

async function fetchPairConversionRate(pair) {

    let response = await fetch(`https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/pair/${pair[0]}/${pair[1]}`);
    let exchangeRate = await response.json();
    return exchangeRate;
}

(function addEventsListenersToPage() {

    let yourCurrencyChoice = document.getElementById('selectYourCurrency');
    let currencyYouWishToReceive = document.querySelector('#selectWhatCurrencyYouWant');
    let yourCurrencyChosed = false;
    let currencyYouWishToReceiveChose = false;
    let amount = document.getElementById('amount');
    let pair = [];

    yourCurrencyChoice.addEventListener("change", function () {
        if (yourCurrencyChosed) {
            amount.value = '';
            let innerSwap2 = document.getElementById('innerSwapWindow2');
            innerSwap2.removeChild(innerSwap2.lastChild);
        }
        yourCurrencyChosed = true;
        let selectElement = document.querySelector('#selectYourCurrency');
        pair[0] = selectElement.value;
    });

    currencyYouWishToReceive.addEventListener("change", function () {
        if (currencyYouWishToReceiveChose) {
            let innerSwap2 = document.getElementById('innerSwapWindow2');
            innerSwap2.removeChild(innerSwap2.lastChild);
        }
        currencyYouWishToReceiveChose = true;
        let selectElement = document.querySelector('#selectWhatCurrencyYouWant');
        pair[1] = selectElement.value;
    });

    let estimateConversionButton = document.querySelectorAll('.conversion')[0];

    estimateConversionButton.addEventListener('click', async function estimateConversion(event) {

        if (yourCurrencyChosed && currencyYouWishToReceiveChose) {

            let innerSwapWindowSecond = document.querySelector('#innerSwapWindow2');
            let amount = document.getElementById('amount');
            let spinner = document.getElementById('spinner');
            let total = 0;

            spinner.hidden = false;
            let exchangeRate = await fetchPairConversionRate(pair);
            spinner.hidden = true;

            let p = document.createElement('p');
            p.id = 'result';
            total = amount.value * exchangeRate['conversion_rate'];
            console.log(exchangeRate['conversion_rate']);

            p.textContent = `${Math.round(total)} ${pair[pair.length - 1]}`;
            p.style.color = 'white';
            p.style.fontSize = '20px';
            p.style.position = 'absolute';
            p.style.margin = '30px 0px 0px 10px';
            innerSwapWindowSecond.appendChild(p);
            console.log(pair);

        } else {
            alert('Please choose currencies');
        }
    })

})();

function createNewOptionForACurrency(currencyTicker) {
    let newOption = document.createElement('option');
    newOption.value = currencyTicker;
    newOption.textContent = currencyTicker;
    return newOption;
}

function populateDropDownsWithCurrencies(availableCurrencies) {

    let yourCurrencyDropDown = document.getElementById('selectYourCurrency');
    let whatCurrencyYouWant = document.getElementById('selectWhatCurrencyYouWant');

    for (let i = 0; i < availableCurrencies['supported_codes'].length; i++) {
        let newOption = createNewOptionForACurrency(availableCurrencies['supported_codes'][i][0])
        yourCurrencyDropDown.appendChild(newOption);
    }

    for (let i = 0; i < availableCurrencies['supported_codes'].length; i++) {
        let newOption = createNewOptionForACurrency(availableCurrencies['supported_codes'][i][0])
        whatCurrencyYouWant.appendChild(newOption);
    }

}

async function start() {
    let availableCurrencies = await fetchAllCurrentlySupportedCurrencies();
    populateDropDownsWithCurrencies(availableCurrencies);
}

start();