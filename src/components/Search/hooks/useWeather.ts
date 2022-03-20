import { useState } from 'react';
import { getWeather } from '../../../services/getWeather';
import { Weather } from '../../WeatherBox/interfaces/interfaces';

export const useWeather = () => {
  
  const [weather, setWeather] = useState<Weather>()


  const cityWeather = async (lat: string, long: string) => {
    setWeather(await getWeather(lat, long))
  }

  return {
    weather,
    cityWeather
  }
}
