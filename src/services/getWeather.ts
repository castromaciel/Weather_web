import axios from "axios";
import { WEATHERMAP_KEY } from "./keys";
import { Weather } from '../components/WeatherBox/interfaces/interfaces';

export const getWeather = async (lat:string ,lon:string ) => {
  try {
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHERMAP_KEY}&units=metric&lang=en`)
    const weather:Weather = {
      description: resp.data.weather[0].description,
      temp: resp.data.main.temp,
      min: resp.data.main.temp_min,
      max: resp.data.main.temp_max,
    }

    return weather

  } catch (error) {
    console.error(error)
  }
}