import { useEffect } from 'react';
import { useLocation } from '../hooks/useLocation';
import { useSearch } from '../hooks/useSearch';

const SearchInput = () => {
  const { setLocation } = useSearch()
  const { location2 , cityFound } = useLocation()

  useEffect( () =>{
    if(location2){
      setLocation(location2)
    }
  })

  return (

      <div  className='d-flex align-items-center justify-content-center w-100' >
        <div className="d-flex flex-column align-items-center col-10 col-md-8 col-lg-6">
          <label htmlFor="search-city" className="fs-3  form-label">Search</label>
          <input 
            type="text" 
            className="form-control" 
            id="search-city" 
            placeholder="City..." 
            autoComplete="off"
            onChange={ async (e) => { await cityFound(e.target.value) } } 
          />
        </div>
      </div>
  )
}

export default SearchInput