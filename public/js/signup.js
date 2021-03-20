const patientData = async function(event) {
    event.preventDefault();
  
    const name = document.querySelector('h1[name="name"]').value;
    const email = document.querySelector('h2[name="email"]').value;
    const cellPhone = document.querySelector('h3[name="cellPhone"]').value;
  
    fetch("api/:id", {
      method: 'GET',
      body: JSON.stringify({
        name: name,
        email: email,
        cellPhone: cellPhone,
      }),
      headers: { 'Content-Type': 'application/json' }
    }).then(function() {
      document.location.replace('/myProfile');
  });
}
