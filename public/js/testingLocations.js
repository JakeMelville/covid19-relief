const patientData = async function (event) {
    //     event.preventDefault();
  
    const practiceName = document.querySelector('h1[name="practiceName"]');
    const streetAddress = document.querySelector('h2[name="streetAddress"]');
    const city = document.querySelector('h3[name="city"]');
    const state = document.querySelector('h4[name="state"]');
    const zip = document.querySelector('h5[name="zip"]');
  
    var response = await fetch("api/location/:id", {
      // method: 'GET',
      // body: JSON.stringify({
      //   name: name,
      //   email: email,
      //   cellPhone: cellPhone,
      // }),
      headers: { "Content-Type": "application/json" },
    });
    var locationData = await response.json();
    console.log(locationData);
  
    // $("#new-patient-form").empty();
  
    practiceName.textContent = "Practice Name: " + locationData.practiceName;
    streetAddress.textContent = "Street Address: " + locationData.streetAddress;
    city.textContent = "City: " + locationData.city;
    state.textContent = "State: " + locationData.state;
    zip.textContent = "Zip: " + locationData.zip;
  
  
    // .then(function(res) {
    //     res.json()
    //     // console.log(patientData)
    //     // document.location.replace('/myProfile');
    // }).then( (patientData) => {
    //   console.log(patientData)
    // });
  };
  patientData();