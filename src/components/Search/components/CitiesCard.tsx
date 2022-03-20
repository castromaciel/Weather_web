import '../styles/search.css';
import { useWeather } from '../hooks/useWeather';
import { CityFoundCopy } from '../interfaces/interfaces';
import { useCityWeather } from '../hooks/useCityWeather';
import { useEffect } from 'react';

export const CitiesCard = (props:CityFoundCopy) => {

  const { weather, cityWeather } = useWeather()
  const { setWeather } = useCityWeather() 

  useEffect( () =>{
    if(weather) setWeather(weather)
  })

  return (

    <li  className={`shadow d-flex align-items-center text-white cities__card`} onClick={async () => await cityWeather(props.lat, props.lng)}>
      <h3 className='p-1 m-1 m-0'>{props.name}</h3>
    </li>

  )
}
