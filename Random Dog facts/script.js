// API endpoint for fetching dog facts
const apiUrl = 'https://dogapi.dog/api/facts';

// Function to fetch data from API
const fetchDogFact = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.facts[0]; // Assuming facts is an array and we want the first fact
  } catch (error) {
    console.error('Error fetching dog fact:', error);
    return null;
  }
};

// Function to display dog fact on the webpage
const displayDogFact = async () => {
  const factContainer = document.getElementById('factContainer');
  factContainer.innerHTML = ''; // Clear previous content

  const fact = await fetchDogFact();
  if (fact) {
    const factElement = document.createElement('p');
    factElement.textContent = fact;
    factContainer.appendChild(factElement);
  } else {
    factContainer.innerHTML = '<p>Error fetching dog fact. Please try again later.</p>';
  }
};

// Event listener for the "Load Another Fact" button
const loadFactBtn = document.getElementById('loadFactBtn');
loadFactBtn.addEventListener('click', displayDogFact);

// Initial display of dog fact when the page loads
window.onload = displayDogFact;
