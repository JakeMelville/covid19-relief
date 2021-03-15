const apiUrl = 'http://www.mapquestapi.com/geocoding/v1/address?key=';
const apiKey = 'WFU3qGtFSrPpKOpC8vhpd3bfXKHEP4My';
const locationInput = 'Trenton, NJ' //user input;

const mapUrl = 'https://open.mapquestapi.com/staticmap/v5/map?key=';
// const defaultMarker = '&defaultMarker=marker-sm-3B5998-22407F'

const queryString = apiUrl + apiKey + '&location=' + locationInput.replace(' ', '');
const stillMap = mapUrl + apiKey + '&center=trenton,nj&size=400,600&zoom=8';
const mapString = mapUrl + apiKey + '&locations=Sparta,NJ||Newton,NJ||Edison,NJ||Atlantic+city,nj&via';

const img = document.createElement('img')
img.src = mapString;
var src = document.getElementById('map');
src.appendChild(img);

fetch(queryString)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        console.log(data.results[0].locations[0].latLng.lat);
        const locationLat = data.results[0].locations[0].latLng.lat;

        console.log(data.results[0].locations[0].latLng.lng);
        const locationLng = data.results[0].locations[0].latLng.lng;
        // document.querySelector('body').textContent = data;
    });

fetch(mapString)
    .then((res) => res.json())
    .then((mapData) => {
        console.log(mapData);
        // document.getElementById('map').innerHTML = mapData;
    });

console.log(queryString);
console.log(mapString);