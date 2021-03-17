const apiUrl = 'http://www.mapquestapi.com/geocoding/v1/address?key=';
const apiKey = 'WFU3qGtFSrPpKOpC8vhpd3bfXKHEP4My';
const locationInput = document.getElementById("input"); //user input;
let lon;
let lat;
const submitInput = document.getElementById("submit")

console.log(submitInput)

const mapUrl = 'https://open.mapquestapi.com/staticmap/v5/map?key=';
// const defaultMarker = '&defaultMarker=marker-sm-3B5998-22407F'

const queryString = apiUrl + apiKey + '&location=' + locationInput.value.replace(/\s+/g, '').toLowerCase();
const stillMap = mapUrl + apiKey + '&banner=Covid+Test+Sights-NJ Area|top&center=trenton,nj&size=400,600&zoom=8&locations=40.1207,-74.28952||40.15256,-74.2291||40.00803,-74.16623||40.05976,-74.14184||40.21875,-74.62248||40.33375,-74.24208||40.14269,-74.22684||40.33969,-74.62722||40.21219,-74.01481||40.18867,-74.87824||40.05189,-74.90877||40.24199,-74.30546||40.44053,-74.50541||40.50674,-74.39655||39.9992,-74.98635||40.08692,-75.02265||40.5556,-74.34595||40.05008,-74.1197||39.993,-75.09644||40.11905,-75.11935||40.30472,-75.14384||39.75012,-75.12785||39.92332,-75.2378||40.7007,-74.19956||40.67848,-74.2343||40.6855,-74.10021||40.709,-74.19768||40.75671,-74.16836||40.25877,-75.2662||40.7426,-74.19172||40.72386,-73.99828||40.72767,-73.95315||39.43744,-75.04009||40.73809,-74.03504||40.74511,-73.8856||40.85331,-74.17292';
const mapString = mapUrl + apiKey + '&locations=40.1207,-74.28952||40.15256,-74.2291||40.00803,-74.16623||40.05976,-74.14184||40.21875,-74.62248||40.33375,-74.24208||40.14269,-74.22684||40.33969,-74.62722||40.21219,-74.01481||40.18867,-74.87824||40.05189,-74.90877||40.24199,-74.30546||40.44053,-74.50541||40.50674,-74.39655||39.9992,-74.98635||40.08692,-75.02265||40.5556,-74.34595||40.05008,-74.1197||39.993,-75.09644||40.11905,-75.11935||40.30472,-75.14384||39.75012,-75.12785||39.92332,-75.2378||40.7007,-74.19956||40.67848,-74.2343||40.6855,-74.10021||40.709,-74.19768||40.75671,-74.16836||40.25877,-75.2662||40.7426,-74.19172||40.72386,-73.99828||40.72767,-73.95315||39.43744,-75.04009||40.73809,-74.03504||40.74511,-73.8856||40.85331,-74.17292';


const img = document.createElement('img')
img.src = stillMap;
var src = document.getElementById('map');
src.appendChild(img);

submitInput.addEventListener("click", function(){
    console.log("lol")
});
fetch(queryString)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        console.log(data.results[0].locations[0].latLng.lat);
        const locationLat = data.results[0].locations[0].latLng.lat;
        lat = locationLat

        console.log(data.results[0].locations[0].latLng.lng);
        const locationLng = data.results[0].locations[0].latLng.lng;
        lon = locationLng
        // document.querySelector('body').textContent = data;

    })
    
fetch(mapString)
    .then((res) => res.json())
    .then((mapData) => {
        console.log(mapData);
        // document.getElementById('map').innerHTML = mapData;
    
});



console.log(queryString);
console.log(mapString);