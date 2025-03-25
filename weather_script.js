class WeatherScript {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    }

    async getWeatherByCity(city) {
        try {
            const response = await fetch(`${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error(`Error fetching weather data: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getWeatherByCoordinates(lat, lon) {
        try {
            const response = await fetch(`${this.baseUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error(`Error fetching weather data: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

// Export the class for use in other files
export default WeatherScript;