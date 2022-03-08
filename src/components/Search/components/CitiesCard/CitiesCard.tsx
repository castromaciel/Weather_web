import './cities-card.css'

export const CitiesCard = () => {
  return (
    <div className='shadow cities-card d-flex align-items-center justify-content-between text-white'>
      <img className="city-weather-img PS-" src='./favicon.ico' alt='favicon'/>

      <h3>City, State, Country</h3>

      <h3>23°C</h3>
    </div>
  )
}
