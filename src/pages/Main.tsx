import SearchInput from '../components/Search/components/SearchInput/SearchInput';
import SearchBoxResults from '../components/Search/components/SearchBox/SearchBoxResults';
import { SearchContext } from '../components/Search/context/SearchContext';
import { useState } from 'react';
import { CityFoundCopy } from '../components/Search/interfaces/interfaces';
import { WeatherCard } from '../components/WeatherBox/components/WeatherCard';
import { WeatherContext } from '../components/Search/context/WeatherContext';
import { Weather } from '../components/WeatherBox/interfaces/interfaces';

function Main() {
  const [location, setLocation] = useState<CityFoundCopy>({
    id:0,
    place_name: "", 
    lng:"",
    lat:""
  });

  const [weather, setWeather] = useState<Weather>({
    description: "",
    temp: 0,
    max: 0,
    min: 0
  })

  return (
    <SearchContext.Provider value={{ location, setLocation }}>
      <WeatherContext.Provider value={ { weather, setWeather} }>

        <div className='mt-5 d-flex flex-column align-items-center'>
          <SearchInput />
          {location.id !== 0 && <SearchBoxResults />}
        </div>
        <WeatherCard />

      </WeatherContext.Provider>
    </SearchContext.Provider>
  )
}

export default Main