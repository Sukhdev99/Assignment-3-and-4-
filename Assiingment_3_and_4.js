// Exchange rates 
const CAD_TO_USD_RATE = 0.73; // constant variables
const USD_TO_CAD_RATE = 1.37;

function convertCurrency() {
    const amountInput = parseFloat(document.getElementById('amountInput').value); // it will take the amount from textbox and convert it into float  
    const fromCurrency = document.getElementById('fromCurrency').value; // it will fetch the value of dropodown to know which currency needs to converted
    const toCurrency = document.getElementById('toCurrency').value; // it will fetch the value of dropodown to know into which currency we have to converted

    if (validateInput(amountInput)) {
        let result;
        
        if (fromCurrency === 'CAD' && toCurrency === 'USD') // CAN to USD
        {
            result = amountInput * CAD_TO_USD_RATE;
        } 
        else if (fromCurrency === 'USD' && toCurrency === 'CAD') // USD to CAN
        {
            result = amountInput * USD_TO_CAD_RATE;
        } 
        else // if both the droopdown has same values program will not run and shows an alert 
        {
            alert('Invalid currency conversion.');
            return;
        }

        document.getElementById('resultOutput').value = result.toFixed(3);
    }
}

function validateInput(input) // if nothing has been entered 
{
    if (isNaN(input) || input <= 0) {
        alert('Please enter a valid positive number.');
        return false;
    }
    return true;
}

function exchangeValues() // button to exchange values of dropdown
{
    var dropdown1 = document.getElementById("fromCurrency");
    var dropdown2 = document.getElementById("toCurrency");

    // Exchange values by temp variable
    var tempValue = fromCurrency.value;
    dropdown1.value = toCurrency.value;
    toCurrency.value = tempValue;
}