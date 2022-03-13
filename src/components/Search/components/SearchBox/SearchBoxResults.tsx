import './search-box-results.css'
import { CitiesCard } from '../CitiesCard/CitiesCard';
import { useSearch } from '../../hooks/useSearch';

function SearchBoxResults() {

  const { location } = useSearch()

  return (
      <div className={`col-10 col-md-8 col-lg-6 show-results shadow`}>
        {location.map( () => <CitiesCard /> )}        
      </div>
  )
}

export default SearchBoxResults