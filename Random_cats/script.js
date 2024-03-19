// API endpoint
const apiUrl = 'https://cataas.com/cat';

// Function to fetch data from API
const fetchCatImage = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const imageData = await response.blob();
    return URL.createObjectURL(imageData);
  } catch (error) {
    console.error('Error fetching cat image:', error);
    return null;
  }
};

// Function to display cat image on the webpage
const displayCatImage = async () => {
  const catImageElement = document.createElement('img');
  catImageElement.classList.add('img-fluid', 'rounded', 'mt-3');
  catImageElement.alt = 'Random Cat Image';

  const outputElement = document.getElementById('output');
  outputElement.innerHTML = ''; // Clear previous content
  outputElement.appendChild(catImageElement);

  const imageUrl = await fetchCatImage();
  if (imageUrl) {
    catImageElement.src = imageUrl;
  } else {
    catImageElement.src = 'placeholder.jpg'; // Placeholder image in case of error
  }
};

// Event listener for the "Load Another Cat" button
const loadCatBtn = document.getElementById('loadCatBtn');
loadCatBtn.addEventListener('click', displayCatImage);

// Initial display of cat image when the page loads
window.onload = displayCatImage;
