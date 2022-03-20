import styles from '../styles/weatherbox.module.css'
import { Status } from './Status';

export const WeatherCard = () => {
  return (
    <div className='d-flex alig-items-center justify-content-center'>
      <div className={`bg-light text-dark my-3 col-10 col-md-8 col-lg-6 ${styles.card__weather_box}`}>
        <Status />
      </div>
    </div>
  )
}
