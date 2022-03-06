import './search-bar.css'

export const CitiesCard = () => {
  return (
    <div className='cities-card d-flex align-items-center justify-content-between text-white'>
      <img className="city-weather-img" src='./favicon.ico' alt='favicon'/>

      <h3>City, State, Country</h3>

      <h3>23°C</h3>
    </div>
  )
}
