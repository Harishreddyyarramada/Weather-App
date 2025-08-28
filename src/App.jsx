import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ForecastList from './components/ForecastList'

export default function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Fetch weather for a city using Open-Meteo
  const fetchWeather = async () => {
    try {
      setLoading(true)
      setError(null)

      // Step 1: Geocoding API to get latitude / longitude
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0) throw new Error("City not found")
      const { latitude, longitude, name } = geoData.results[0]

      
      // Step 2: Weather API
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
      )
      const data = await res.json()
      setWeather({
        city: name,
        temp: data.current_weather.temperature,
        description: `Weather code ${data.current_weather.weathercode}`,
        icon: data.current_weather.weathercode
      })
      setForecast(
        data.daily.time.map((day, i) => ({
          day,
          temp: data.daily.temperature_2m_max[i],
          icon: data.daily.weathercode[i],
          description: data.daily.weathercode[i]
        }))
      )
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Fetch using current location
  const fetchLocationWeather = async () => {
    setLoading(true);
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const { latitude, longitude } = pos.coords;
    try {
      // geocoding API
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
      if (!response.ok) throw new Error("Failed to fetch location name");
      const Name = await response.json();
      const locationName =
        Name.address.county ||
        "Unknown Location";
      //  Weather API
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`);
      if (!res.ok) throw new Error("Failed to fetch weather");
      const data = await res.json();
      setWeather({
        city: `${locationName} (Current Location)`,
        temp: data.current_weather.temperature,
        description: data.current_weather.weathercode,
        icon: data.current_weather.weathercode,
      });

      setForecast(
        data.daily.time.map((day, i) => ({
          day,
          temp: data.daily.temperature_2m_max[i],
          icon: data.daily.weathercode[i],
          description: data.daily.weathercode[i],
        }))
      );
    } catch (err) {
      console.error("Error fetching location/weather:", err);
      setError("Unable to fetch location weather");
    } finally {
      setLoading(false);
    }
  });
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-sky-500 to-indigo-600 
                    dark:from-gray-900 dark:via-gray-800 dark:to-black
                    flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white/80 dark:bg-gray-900/70 
                      rounded-2xl shadow-2xl p-8 backdrop-blur">
        <Header />
        <SearchBar 
          city={city} 
          setCity={setCity} 
          fetchWeather={fetchWeather} 
          fetchLocationWeather={fetchLocationWeather} 
        />

        {loading && <div className="flex justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div></div>}
        {error && <p className="text-center text-red-600 font-semibold mt-4">{error}</p>}
        {weather && <WeatherCard data={weather} />}
        {forecast.length > 0 && <ForecastList forecast={forecast} />}
      </div>
    </div>
  )
}
