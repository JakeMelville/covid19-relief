const patientData = async function(event) {
    //     event.preventDefault();
      
        const name = document.querySelector('h1[name="name"]');
        const email = document.querySelector('h2[name="email"]');
        const cellPhone = document.querySelector('h3[name="cellPhone"]');
      
        var response = await fetch("api/patient/:id", {
          // method: 'GET',
          // body: JSON.stringify({
          //   name: name,
          //   email: email,
          //   cellPhone: cellPhone,
          // }),
          headers: { 'Content-Type': 'application/json' }
        })
        var patientData = await response.json()
        console.log(patientData)
    
        // $("#new-patient-form").empty();
    
        name.textContent =  "Patients Name: " + patientData.name;
        email.textContent = "Email: " + patientData.email;
        cellPhone.textContent = "Cell-Phone: " + patientData.cellPhone;
    
      // .then(function(res) {
      //     res.json()
      //     // console.log(patientData)
      //     // document.location.replace('/myProfile');
      // }).then( (patientData) => {
      //   console.log(patientData)
      // });
    }
    patientData();