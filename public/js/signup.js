const patientData = async function(event) {
    event.preventDefault();
  
    const name = document.querySelector('h1[name="name"]').value;
    const email = document.querySelector('h2[name="email"]').value;
    const cellPhone = document.querySelector('h3[name="cellPhone"]').value;
  
    await fetch().then(result => {
      method: 'GET',
      body: JSON.stringify({
        name,
        email,
        cellPhone,
      });
      headers: { 'Content-Type': 'application/json' }
    });
  
    document.location.replace('/myProfile');
  };
  
