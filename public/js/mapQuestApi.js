const apiUrl = 'http://www.mapquestapi.com/geocoding/v1/address?key=';
const apiKey = key.map_key;
const discoverApiKey = key.dicover_key;
const locationInput = document.getElementById("input"); //user inputle
const mapUrl = 'https://open.mapquestapi.com/staticmap/v5/map?key=';


function locFinder(event) {
    event.preventDefault();
    document.getElementById("test-locations").removeAttribute('display')
    const queryString = apiUrl + apiKey + '&location=' + locationInput.value.replace(/\s+/g, '').toLowerCase();
    console.log(queryString)
    fetch(queryString)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            console.log(data.results[0].locations[0].latLng.lat);
            const locationLat = data.results[0].locations[0].latLng.lat;

            console.log(data.results[0].locations[0].latLng.lng);
            const locationLng = data.results[0].locations[0].latLng.lng;

            fetch(`https://discover.search.hereapi.com/v1/discover?apikey=${discoverApiKey}&q=Covid&at=${locationLat},${locationLng}&limit=5`)
                .then(res => res.json())
                .then(nearLocations => {
                    console.log(nearLocations);
                    var res1 = document.getElementById("result-1");
                    res1.textContent = "1: " + nearLocations.items[0].address.label;

                    var res2 = document.getElementById("result-2");
                    res2.textContent = "2: " + nearLocations.items[1].address.label;

                    var res3 = document.getElementById("result-3");
                    res3.textContent = "3: " + nearLocations.items[2].address.label;

                    var res4 = document.getElementById("result-4");
                    res4.textContent = "4: " + nearLocations.items[3].address.label;

                    var res5 = document.getElementById("result-5");
                    res5.textContent = "5: " + nearLocations.items[4].address.label;

                    const stillMap = mapUrl + apiKey + `&banner=Covid+19+Test+Sights|top&size=400,400&zoom=10&locations=${nearLocations.items[0].position.lat},${nearLocations.items[0].position.lng}|marker-1||${nearLocations.items[1].position.lat},${nearLocations.items[1].position.lng}|marker-2||${nearLocations.items[2].position.lat},${nearLocations.items[2].position.lng}|marker-3||${nearLocations.items[3].position.lat},${nearLocations.items[3].position.lng}|marker-4||${nearLocations.items[4].position.lat},${nearLocations.items[4].position.lng}|marker-5`
                    const img = document.createElement('img')
                    img.src = stillMap;
                    var src = document.getElementById('map');
                    src.appendChild(img);

                });
        });
}

document.getElementById('submitBtn').addEventListener("click", locFinder)