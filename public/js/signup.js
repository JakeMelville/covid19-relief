const newFormHandler = async function(event) {
    event.preventDefault();
  
    const patientName = document.querySelector('textarea[name="name"]').value;
    const patientEmail = document.querySelector('textarea[name="email"]').value;
    const patientEmail = document.querySelector('textarea[name="cellPhone"]').value;
  
    await fetch(`/api/post`, {
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