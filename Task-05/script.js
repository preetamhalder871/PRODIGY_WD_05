async function getWeather() {
    const apiKey = 'e642a95be4ea4d158a0161629242907';  // Replace with your WeatherAPI key
    const country = document.getElementById('country').value;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}`;

    console.log('API URL:', url);  // Debug: Log the API URL

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log('Response Data:', data);  // Debug: Log the response data

        const weatherInfo = document.getElementById('weather-info');

        if (data.location) {
            const temperature = data.current.temp_c;
            const cloud = data.current.cloud;

            // Update weather information
            weatherInfo.innerHTML = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Real feeling: ${data.current.feelslike_c}°C</p>
                <p>Weather: ${data.current.condition.text}</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind Speed: ${data.current.wind_kph} kph</p>
                <p>Pressure: ${data.current.pressure_in} inch</p>
                <p>Cloud: ${cloud}%</p>
            `;
            // You can reintroduce dynamic background changes if needed
        } else {
            weatherInfo.innerHTML = "<p>Country not found. Please try again.</p>";
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        document.getElementById('weather-info').innerHTML = "<p>Error fetching the weather data. Please try again.</p>";
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.getElementById('a-header').classList.toggle('dark-mode');
    document.getElementById('container').classList.toggle('dark-mode');
    document.getElementById('header').classList.toggle('dark-mode');
    document.getElementById('box-text').classList.toggle('dark-mode');
    document.getElementById('footer').classList.toggle('dark-mode');

    const themeToggleButton = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.innerText = "Cloudy Sky";
    } else {
        themeToggleButton.innerText = "Clear Sky";
    }
}
