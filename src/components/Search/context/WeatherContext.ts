import { createContext } from 'react';
import { WeatherContextInterface } from '../interfaces/interfaces';
import { Weather } from '../../WeatherBox/interfaces/interfaces';

export const WeatherContext = createContext<WeatherContextInterface>({
  weather: {
    description: "",
    temp: 0,
    max: 0,
    min: 0
  },
  setWeather: async (weather: Weather) => console.warn('No weather ', weather),
})

