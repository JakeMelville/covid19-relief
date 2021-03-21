const axios = require("axios").default;
APIKey = "2E2hXtlLTixuNk2K6LWH7tzmKtQscKlf74M2DC_PX4A";

(testURL =
  "https://discover.search.hereapi.com/v1/discover?apikey=" +
  APIKey +
  "&q=Covid&at=" +
  locationLat),
  locationLng + "&limit=10";

function getLocation() {
  axios.get(testURL).then(response);
  console.log(response);
}
getLocation();
