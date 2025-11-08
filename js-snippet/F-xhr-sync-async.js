// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     // Open the request (method, URL, asynchronous flag)
//     xhr.open('GET', url, true);

//     // Optional: Set headers (e.g., for content type)
//     // xhr.setRequestHeader('Content-Type', 'application/json');

//     // Handle successful response
//     xhr.onload = function() {
//       if (xhr.status === 200) { // Check for successful response status code
//         resolve(xhr.responseText); // Resolve the promise with the response data
//       } else {
//         reject(new Error(`Request failed with status: ${xhr.status}`)); // Reject with an error for non-200 status
//       }
//     };

//     // Handle errors
//     xhr.onerror = function() {
//       reject(new Error('Network error')); // Reject with an error for network issues
//     };

//     // Send the request
//     xhr.send();
//   });
// }