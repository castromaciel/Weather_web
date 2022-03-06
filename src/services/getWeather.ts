import {  WEATHERMAP_KEY } from "./keys";
import axios from "axios";

interface WeatherPlace{
  id: number; 
  place_name: string; 
  center: string []; 
}

export const getWeather = async (lat:number, lon:number) => {
  try {
    const resp = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHERMAP_KEY}`);

    return resp.data.features.map( (weather:WeatherPlace) => ({
      description: weather.id,
      temp: weather.place_name,
      min: weather.center[0],
      max: weather.center[1]
    }))

  } catch (error) {
    console.log(error)
    return []; 
  }
};