// Learn how Promises can simulate tasks like fetching data, where you can use a simple condition (e.g., const data = true) instead of actually fetching data from a server 

// Define the function that returns a Promise
function fetchDataFromDatabase() {
  return new Promise((resolve, reject) => {

    const data = false;

    // Time delay
    setTimeout(() => {      

      // Resolve or reject based on the condition
      if (data) {
        resolve("Data fetched successfully!");
      } else {
        reject("Data not found!");
      }

    }, 3000);
  });
}

// Call the function and handle the Promise
fetchDataFromDatabase()
  .then(message => {
    console.log(message);   // "Data fetched successfully!"
  })
  .catch(error => {
    console.log(error);     // "Data not found!"
  });