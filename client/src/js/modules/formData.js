const formData = {};

function updateFormData(key, value) {
    formData[key] = value;
}

function updateCountry(country, type) {
    formData[`${type}Country`] = country;
}