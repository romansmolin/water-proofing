async function getCityAndState(zipCode, country) {
    const apiKey = 'AIzaSyALi6BN0vdvo28FYyrPUt_k0v656lHdT6E' // Geocoding API GOOGLE
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&components=country:${country}|postal_code:${zipCode}&sensor=false&key=${apiKey}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
            return data; 
        })
        .catch(err => {
            console.error(err);
            throw err; 
        });
}