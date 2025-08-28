export default function SearchBar({ city, setCity, fetchWeather, fetchLocationWeather }) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 w-full">
      {/* Input */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   dark:bg-gray-800 dark:text-white"
      />

      {/* Buttons container for mobile-friendly stacking */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
        <button
          onClick={fetchWeather}
          className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                     rounded-xl shadow-md transition w-full sm:w-auto"
        >
          Search
        </button>

        <button
          onClick={fetchLocationWeather}
          className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold 
                     rounded-xl shadow-md transition w-full sm:w-auto"
        >
          Use My Location
        </button>
      </div>
    </div>
  )
}
