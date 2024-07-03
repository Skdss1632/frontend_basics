const path = require('path');
const fs = require('fs').promises;

const jsonFilePath = path.join(__dirname, 'states.json'); // Adjust the path accordingly

async function fetchJSONData() {
  try {
    const data = await fs.readFile(jsonFilePath, 'utf-8');
    const jsonData = JSON.parse(data);
    console.log(jsonData); // JSON data
  } catch (error) {
    console.error('There was a problem reading the file:', error);
  }
}

fetchJSONData();
