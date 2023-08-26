// KEY -> c967f54e2bb96b822df7e27e13d174cd <- TO BE DELETED

const baseURL = `https://api.openweathermap.org/data/2.5/weather`
const searchBtn = $("button");
const city = $("#city");
const content = $(".content");

searchBtn.click(() =>{
    try{
        /*
            we will use a guard clause to check if input
            is empty, has white space,
        */
        if(!city.val().trim() || city.val() === '' || !isNaN(city.val().trim()) ){
            alert("Please enter a valid city");
        }else{
            // create a debounce to minimize rapid calls to the API
            setTimeout(weather,2000);
        }
    }catch (error){
        content.html(errorHtml(error.message,cityNotFound = false))
    }
});


async function weather(){ // since we are using an async function, await keyword must be used 
    /* 
        we fetch a promise. after the fetch returns a promise,
        we resolve the promise into a response object;
    */
    try{
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.val()}&appid=c967f54e2bb96b822df7e27e13d174cd`)
        const weatherData = await weather.json();
        content.html(weatherHtml(weatherData));
    }catch(error){
        let cityNotFound = true;
        content.html(errorHtml(error.message, cityNotFound));
    }
    
}

function errorHtml(message, cityNotFound){
    let errorMessage = message;
    if(cityNotFound){
        errorMessage = `City not found`
    }

    return `
        <figure class="error-content animate__animated animate__fadeIn">
            <img src="./img/notfound.png" alt="" width="350">
            <figcaption>
                <h2>An Error Occurred</h2>
                <br>
                <h2>${errorMessage}</h2>
            </figcaption>
        </figure>
    `
}

function weatherHtml(city){
    // To convert Kelvin (K) to Celsius (°C), you can use the following formula: °C = K - 273.15
    
    return `
    <div class="weather-content_wrapper ">
        <figure id="weather" class="animate__animated animate__fadeIn ">
            <img src="https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png" alt="${city.weather[0].main}">
            <figcaption>
                <h2 class="temp">${ Math.round(city.main.temp - 273.15)}℃</h2>
                <h4 class="target-city">${city.name}, ${city.sys.country}</h4>
            </figcaption>
        </figure>
    </div>      
    <div class="weather-subcontent_wrapper">
        <figure id="feels-like" class="animate__animated animate__fadeIn">
            <img src="./img/wind.png" alt="wind">
            <figcaption>
                <h4>feels like<br>${Math.round(city.main.feels_like - 273.15)}℃</h4>
            </figcaption>
        </figure>
        <figure id="humidty" class="animate__animated animate__fadeIn">
            <img src="./img/Humidity.png" alt="droplet of water">
            <figcaption>
                <h4>Humidity<br>${city.main.humidity}%</h4>
            </figcaption>
        </figure>
    </div>
    `
}