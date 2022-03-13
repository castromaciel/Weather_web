import SearchInput from '../components/Search/components/SearchInput/SearchInput';
import SearchBoxResults from '../components/Search/components/SearchBox/SearchBoxResults';
import { SearchContext } from '../components/Search/context/SearchContext';
import { useState } from 'react';
import { CityFoundCopy } from '../components/Search/interfaces/interfaces';

function Main() {
  const [location, setLocation] = useState<CityFoundCopy>({
    id:0,
    place_name: "", 
    lng:"",
    lat:""
  });

  return (
    <SearchContext.Provider value={{ location, setLocation }}>
      <div className='mt-5 d-flex flex-column align-items-center'>
        <SearchInput />
        <SearchBoxResults />
      </div>
    </SearchContext.Provider>
  )
}

export default Main