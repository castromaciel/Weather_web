import { CitiesCard } from '../CitiesCard/CitiesCard'
import './search-box-results.css'

function SearchBoxResults() {


  return (
      <div className={`col-10 col-md-8 col-lg-6 show-results shadow`}>
        <CitiesCard />
      </div>
  )
}

export default SearchBoxResults