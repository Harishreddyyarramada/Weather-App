import React from "react";
import { weatherDescriptions, weatherIcons } from "./WeatherInfo";
export default function Forecast({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="mt-8">
      {/* Container */}
      <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">7-Day Forecast</h3>

      {/* Scrollable on mobile, grid on larger screens */}
      <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible pb-2">
        {forecast.map((day, idx) => (
          <div key={idx} className="flex-shrink-0 w-32 sm:w-full bg-white/70 dark:bg-gray-800/70 p-4 rounded-xl shadow-md text-center backdrop-blur transition hover:shadow-lg">
            {/* Date */}
            <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base truncate">
              {day.day}
            </p>

            {/* Icon */}
            <img src={`/icons/${weatherIcons[day.icon] || "unknown"}.svg`} alt={weatherDescriptions[day.icon] || "Unknown"} className="mx-auto w-12 h-12 my-2"/>

            {/* Temperature */}
            <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              {day.temp}°C
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
              {weatherDescriptions[day.icon] || "Unknown"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
