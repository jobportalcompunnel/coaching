function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response body as JSON
    })
    .then(data => {
        resolve(data);
    })
    .catch(error => {
       reject( error);
    });
    });
}

// Usage
fetchData('https://reqres.in/api/users')
    .then(response => {
        console.log('Data fetched successfully:', response);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
