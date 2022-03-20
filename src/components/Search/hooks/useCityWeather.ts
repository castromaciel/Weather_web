import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';


export const useCityWeather = () => useContext(WeatherContext);