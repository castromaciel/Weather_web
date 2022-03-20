import { useCityWeather } from '../../Search/hooks/useCityWeather';
import { useSearch } from '../../Search/hooks/useSearch';

export const Status = () => {

  const { location } = useSearch()
  const { weather } = useCityWeather()
 
  console.log(location)
  console.log(weather)
  return (
    <div className={`d-flex flex-column align-items-center`}>
      <h3>city: {location.place_name}</h3>
      <h3>img: {}</h3>
      <h3>{weather.temp}°C</h3>
      <h3 className='text-capitalize'>{weather.description}</h3>
      <div className={`d-flex`}>
        <h4 className="px-1 mx-3">Min: {weather.min}°C</h4>
        <h4 className="px-1 mx-3">Max: {weather.max}°C</h4>
      </div>
    </div>
  )
}
