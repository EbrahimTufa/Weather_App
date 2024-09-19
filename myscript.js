const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your OpenWeather API key

document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    getWeather(city);
});

function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').textContent = `Weather in ${data.name}, ${data.sys.country}`;
                document.getElementById('weather-description').textContent = `Conditions: ${data.weather[0].description}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            } else {
                document.getElementById('city-name').textContent = 'City not found';
                document.getElementById('weather-description').textContent = '';
                document.getElementById('temperature').textContent = '';
                document.getElementById('humidity').textContent = '';
            }
        })
        .catch(error => {
            console.log(error);
            alert('Failed to fetch weather data');
        });
}
