import { weatherDescriptions,weatherIcons} from './WeatherInfo.jsx'
export default function WeatherCard({ data }) {
  if (!data) return null;
  return (
    <div
      className="text-center bg-white/60 dark:bg-gray-800/70 
                 p-6 sm:p-8 rounded-2xl shadow-md backdrop-blur 
                 flex flex-col items-center gap-4 transition hover:shadow-lg"
    >
      {/* City name */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
        {data.city}
      </h2>

      {/* Icon + Temperature */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <img
          src={`/icons/${weatherIcons[data.icon]}.svg`}
          alt={data.icon}
          className="w-20 h-20 sm:w-24 sm:h-24"
        />
        <p className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          {data.temp}°C
        </p>
      </div>

      {/* Weather description */}
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
        {weatherDescriptions[data.icon]}
      </p>
    </div>
  );
}
