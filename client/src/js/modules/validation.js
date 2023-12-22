function checkIfValid(condition, input, inputValue, errorSpan, errorMessage, updateFunction) {
    if (condition) {
        errorSpan.textContent = errorMessage;
        input.classList.add("wrong")
        updateFunction(input.id, "");
        setValidationIcon(input.id, false)

    } else {
        input.classList.remove("wrong")
        errorSpan.textContent = "";
        if (input.id === "dzip-second") {
            updateFunction('dzip', inputValue)
        } else {
            updateFunction(input.id, inputValue);
        }
        setValidationIcon(input.id, true)
    }

    if (!inputValue) {
        errorSpan.textContent = "";
        input.classList.remove("wrong");
    }
}

function validateZipCode(input, errorId, updateFunction) {
    const errorMessage = "Please enter a valid US or CA zip code";

    const zipCode = input.value;
    const errorSpan = document.getElementById(errorId);

    const usZipCodePattern = /^\d{5}(?:-\d{4})?$/;
    const caPostalCodePattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;

    const isUSZipCode = usZipCodePattern.test(zipCode);
    const isCAPostalCode = caPostalCodePattern.test(zipCode);

    const condition = !(isUSZipCode || isCAPostalCode);

    if (input.value) {
        setCountry(isUSZipCode, isCAPostalCode, zipCode, 'dzip');
        checkIfValid(condition, input, input.value, errorSpan, errorMessage, updateFunction);
    }

}

async function submitZipCode(errorId, inputId) {
    const dzipApiCall = formData.dzipCountry === "CA" ? formData.dzip.replace(' ', '%20') : formData.dzip;
    const dzipResponse = await getCityAndState(dzipApiCall, formData.dzipCountry);
    const errorSpan = document.getElementById(errorId)

    if (dzipResponse.status === "ZERO_RESULTS") {
        errorSpan.textContent = 'Please enter existing zip code'
        setValidationIcon(inputId, false)
    } 

    // navigateStep("forward");
    console.log(dzipResponse.status)

}