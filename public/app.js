// Personal API Key for OpenWeatherMap API
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const KEY = 'eac96e3d79f654b5ceb5cafe7a537a19';

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/
const getWeather = async (url, zip, key) => {
  try {
    const res = await fetch(`${url}?zip=${zip}&appid=${key}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log('Error: ', e);
  }
};

/* Function to POST data */
const saveEntry = async (url = '', data = {}) => {
  try {
    await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.log('Error: ', e);
  }
};

/* Function to GET Project Data */
