const apiUrl = 'http://www.mapquestapi.com/geocoding/v1/address?key=';
const apiKey =  'WFU3qGtFSrPpKOpC8vhpd3bfXKHEP4My';
const locationInput = 'Washington, DC' //user input;

const queryString = apiUrl + apiKey + '&location=' + locationInput;

fetch(queryString)
.then((res) => res.json())
.then((data) => {
    console.log(data.results[0].locations[0].latLng.lat);
    const locationLat = data.results[0].locations[0].latLng.lat;
    
    console.log(data.results[0].locations[0].latLng.lng);
    const locationLng = data.results[0].locations[0].latLng.lng;
    // document.querySelector('body').textContent = data;
})

console.log(queryString);