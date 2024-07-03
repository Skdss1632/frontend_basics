// Path to your JSON file
const jsonFilePath = 'states.json';

// Function to fetch and read JSON data
async function fetchJSONData() {
  try {
    const response = await fetch(jsonFilePath);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data); // JSON data
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Call the function to fetch and read JSON data
fetchJSONData();
