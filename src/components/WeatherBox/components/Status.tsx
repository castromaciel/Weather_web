import styles from '../styles/weatherbox.module.css'
import { useCityWeather } from '../../Search/hooks/useCityWeather';
import { images, weather_array } from '../../../assets/images';

export const Status = () => {

  const { weather } = useCityWeather()
  const index = weather_array.findIndex( i => i === weather.description)

  return (
    <div className={`d-flex flex-column align-items-center`}>
      <h3>{weather.name}</h3>
      
      <img 
        className={`${styles.img__weather_card}`} 
        src={
          index !== -1
          ? images[index]
          : ''
        } 
        alt={weather.description} />

      <h3>{weather.temp}°C</h3>
      <h3 className='text-capitalize'>{weather.description}</h3>
      <div className={`d-flex`}>
        <h4 className="px-1 mx-3">Min: {weather.min}°C</h4>
        <h4 className="px-1 mx-3">Max: {weather.max}°C</h4>
      </div>
    </div>
  )
}
