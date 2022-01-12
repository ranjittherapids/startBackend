
    document.getElementById('upload').addEventListener('click',()=>{
       const image = (document.getElementById('profile-file').value)
     
fetch('http://localhost:8000/image/upload_image', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body:image,
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});