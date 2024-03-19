// API endpoint for fetching random activities
const apiUrl = 'https://www.boredapi.com/api/activity?participants=1';

// Function to fetch data from API
const fetchRandomActivity = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching random activity:', error);
    return null;
  }
};

// Function to display random activity details on the webpage
const displayRandomActivity = async () => {
  const activityContainer = document.getElementById('activityContainer');
  activityContainer.innerHTML = ''; // Clear previous content

  const activityData = await fetchRandomActivity();
  if (activityData) {
    for (const key in activityData) {
      const detailElement = document.createElement('p');
      detailElement.textContent = `${key}: ${activityData[key]}`;
      activityContainer.appendChild(detailElement);
    }
  } else {
    activityContainer.innerHTML = '<p>Error fetching random activity. Please try again later.</p>';
  }
};

// Event listener for the "Load Another Activity" button
const loadActivityBtn = document.getElementById('loadActivityBtn');
loadActivityBtn.addEventListener('click', displayRandomActivity);

// Initial display of random activity details when the page loads
window.onload = displayRandomActivity;
