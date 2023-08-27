# Weather App using JavaScript Async/Await and OpenWeather API

Welcome to the Weather App project! This is a simple web application that allows users to retrieve current weather information for a specific location using the OpenWeather API. The project is built using JavaScript's `async/await` syntax for handling asynchronous operations, utilizing the `fetch` API to make requests, and managing `promises` effectively.

## Features

- **Current Weather:** Get real-time weather data for a chosen city.
- **Search Functionality:** Enter the name of any city to view its weather details.
- **Responsive Design:** Enjoy a seamless experience across various devices.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeather API

## Installation

1. Clone this repository to your local machine using:

```bash
git clone https://github.com/Kujiama/WeatherApp.git
```
 
2. Before using the Weather App, you'll need to obtain an API key from OpenWeather. Follow these steps:

a. Visit the [OpenWeather website](https://openweathermap.org/) and sign up for an account.<br>
b. After signing in, navigate to the [API Keys](https://home.openweathermap.org/api_keys) section in your account dashboard.<br>
c. Generate a new API key for your Weather App.<br>
d. Replace `'YOUR_OPENWEATHER_API_KEY'` in the code below with your newly generated API key.<br>

Here's a code snippet of how the `fetchWeatherData` function utilizes `async/await` and `fetch` to retrieve weather data from the OpenWeather API:

```javascript
async function fetchWeatherData(){ // since we are using an async function, await keyword must be used 
    /* 
        we fetch a promise. after the fetch returns a promise,
        we resolve the promise into a response object;
    */
   
    const apiKey = `YOUR_OPENWEATHER_API_KEY`;
    let cityNotFound;

    try{
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.val()}&appid=${apiKey}`)
        const weatherData = await weather.json();
        content.html(weatherHtml(weatherData));
    }catch(error){
        cityNotFound = true;
        content.html(errorHtml(error.message, cityNotFound));
    }
}
```

### Remember to replace 'YOUR_OPENWEATHER_API_KEY' with your actual OpenWeather API key.

## Using the Application
1. Enter "New York" in the search bar.
2. Click the "Search" button.
3. The app fetches weather data for New York and displays the current weather information on the screen.

## Contact

If you have any questions or inquiries, you can reach out to me via email at englandpelenio17@gmail.com.

Feel free to explore, learn, and modify the Weather App project according to your needs. Happy coding!

**Author:** Raul England Pelenio  
**GitHub:** [Kujiama](https://github.com/your-username)  
**Portfolio:** [https://england-pelenio.vercel.app](https://england-pelenio.vercel.app)
