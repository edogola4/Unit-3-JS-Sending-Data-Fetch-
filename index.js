// Add your code here


document.getElementById('dog-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
  
    const dogName = document.getElementById('dogName').value;
    const dogBreed = document.getElementById('dogBreed').value;
  
    // Creating an object with the form data
    const formData = {
      dogName: dogName,
      dogBreed: dogBreed
    };
  
    // Creating the configuration object for fetch
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData) // Convert formData to JSON format
    };
  
    // Send the POST request to the server
    fetch("http://localhost:3000/dogs", configurationObject)
      .then(response => response.json()) // Convert the response to JSON
      .then(object => {
        console.log("Data successfully sent:", object);
        alert("Dog information added successfully!");
      })
      .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while sending data.");
      });
  });
  