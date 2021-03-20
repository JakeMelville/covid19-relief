const newFormHandler = async function(event) {
    event.preventDefault();
  
    const patientName = document.querySelector('h1[name="name"]').value;
    const patientEmail = document.querySelector('h2[name="email"]').value;
    const patientCellPhone = document.querySelector('h3[name="cellPhone"]').value;
  
    await fetch(`/api/patient/`, {
      method: 'POST',
      body: JSON.stringify({
        patientName,
        patientEmail,
        patientCellPhone,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);