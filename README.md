This project is a simple weather web app built with React (Vite) and Tailwind CSS that lets users quickly check the current weather for any city using a free public API (no authentication required). It relies only on React’s built-in state management, keeping the app lightweight and beginner-friendly. A demo video is included, along with a short explanation of how I used a large language model (LLM) to assist with setup, styling, and troubleshooting.
Weather App

# 🌦️ Weather App

A simple and user-friendly **Weather Application** that provides real-time and forecasted weather information for any city or location.  
Built with **React** and **Tailwind CSS**, the app fetches live weather data using the **Open-Meteo API**.

---

## 📌 Features

- ✅ **Current Weather** – Displays temperature, conditions and along with the current weather condition using the animated .svg images.  
- ✅ **7-Day Forecast** – Shows daily weather including min/max temperature and condition description  
- ✅ **Search by Location** – Enter a city name or use your device’s location  
- ✅ **Responsive Design** – Works smoothly on desktop, tablet, and mobile  
- ✅ **Clean & Simple UI** – Designed for non-technical users with an intuitive interface  

---

## 🖼️ Screenshots

1.Homepage Screenshot<img width="1911" height="1027" alt="Screenshot 2025-08-29 143644 - Copy" src="https://github.com/user-attachments/assets/689daebc-9f42-41d4-9d70-01c1873d3165" />
2.Geo-Location API<img width="1912" height="1031" alt="Location" src="https://github.com/user-attachments/assets/434f4d9d-4e0c-4499-85f5-c7da506a358f" />
3.Current Weather<img width="1920" height="1080" alt="Current Location" src="https://github.com/user-attachments/assets/d37109d7-b3bc-4d39-9460-11f8932c61e9" />
4.City-Name-Weather<img width="1920" height="1080" alt="City-Name" src="https://github.com/user-attachments/assets/78a2d939-d4e1-4ef5-9880-c958d84fe725" />
5.Fetching Error handles .<img width="1920" height="1080" alt="Fetching Error" src="https://github.com/user-attachments/assets/4618bf2d-a34f-43a0-8feb-7d7f0977254f" />


## 🚀 How It Works 

1. You enter a **city name** or allow the app to use your **current location**  
2. The app sends this information to a **weather service (API)**  
3. The weather service replies with **temperature, conditions, and forecast data**  
4. The app displays the data in a **clean and easy-to-read format**  

---

## 🛠️ Tech Stack

- **Frontend:** React + Tailwind CSS  
- **API:** Open-Meteo API  
- **Hosting:** (CodeSandbox)  

---

## 📥 Installation & Setup 

If you are a developer and want to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/weather-app.git

# 2. Go inside the folder
cd weather-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
