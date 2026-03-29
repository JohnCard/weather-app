import { useState } from "react";

export const WeatherApp = () => {
    const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`
    const difKelvin = 273.15

    const [city, setCity] = useState("");
    const [dataWeather, setDataWeather] = useState(null);

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(city.length > 0) fetchWeather()
    }

    const fetchWeather = async () => {
        try{
            const response = await fetch(`${baseUrl}${city}&appid=${apiKey}`)
            const data = await response.json()
            setDataWeather(data)
        }catch(error){
            console.log(`Something went wrong: ${error}`)
        }
    }
  return (
    <>
        <h1>Wheather app</h1>

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>

        {
            dataWeather && (
                <div>
                    <h2>{dataWeather.name}</h2>
                    <p>Temperature: {parseInt(dataWeather?.main?.temp - difKelvin)}°C</p>
                    <p>Meteorologic condition: {dataWeather.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`} />
                </div>
            )
        }
    </>
  )
}
