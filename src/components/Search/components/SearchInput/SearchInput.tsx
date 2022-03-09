import { useSearch } from '../../context/SearchContext';
import { useLocation } from '../../hooks/useLocation';

function SearchInput() {
  const {location, setLocation} = useSearch()
  const { location2 , cityFound } = useLocation()

  // setLocation(location2)

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