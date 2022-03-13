import { CityFoundCopy } from '../../interfaces/interfaces'
import './cities-card.css'

export const CitiesCard = (props:CityFoundCopy) => {

  console.log(props)

  return (

    <div key={props.id} className='shadow cities-card d-flex align-items-center text-white'>
      <div className='d-flex align-items-center'>
        <img className="city-weather-img PS-" src='./favicon.ico' alt='favicon' />
        <h2 className='m-0 ps-3'>23°C</h2>
      </div>
      <h3 className='ps-1 ms-1 ms-sm-3 ps-sm-3 ms-md-5 ps-md-5 m-0'>{props.name}</h3>
    </div>

  )
}
