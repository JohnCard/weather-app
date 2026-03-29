# 🌦️ Weather App

A straightforward weather lookup application built with **React 19** that fetches real-time weather data from the **OpenWeatherMap API**. Enter a city name to get the current temperature, weather conditions, and an icon representing the forecast.

### 🔗 [Live Demo](https://weather-app-ten-omega-76.vercel.app/)

---

### Tech Stack

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-orange?style=flat-square&logo=openweathermap&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Custom-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

### Features

- 🌡️ **Real-time Weather Data** — Current temperature converted from Kelvin to Celsius
- 🌤️ **Weather Conditions** — Displays meteorological description and dynamic weather icon
- 🏙️ **City Search** — Look up weather for any city worldwide
- 📱 **Responsive Design** — Mobile-friendly layout with adaptive styling
- 🔐 **Secure API Keys** — Managed through Vite environment variables

---

### Project Structure

```
weather-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx               # App entry point
    ├── WheatherApp.jsx         # Main weather component
    └── styles/
        └── wheatherStyles.css  # Responsive styles
```

---

### Getting Started

#### Prerequisites
- Node.js ≥ 18
- A free [OpenWeatherMap API key](https://openweathermap.org/api)

#### Installation

```bash
# Clone the repository
git clone https://github.com/JohnCard/weather-app.git

# Navigate to the project
cd weather-app

# Install dependencies
npm install

# Create environment file
echo "VITE_OPEN_WEATHER_MAP=your_api_key_here" > .env

# Start development server
npm run dev
```

#### Environment Variables

| Variable | Description |
|---|---|
| `VITE_OPEN_WEATHER_MAP` | Your OpenWeatherMap API key |

---

### How It Works

1. User enters a city name and submits the form
2. The app fetches data from OpenWeatherMap's Current Weather API
3. Temperature is converted from Kelvin to Celsius (`temp - 273.15`)
4. Weather condition, description, and icon are displayed dynamically
