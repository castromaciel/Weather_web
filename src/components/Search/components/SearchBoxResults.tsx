import '../styles/search.css';
import { CitiesCard } from './CitiesCard';
import { useSearch } from '../hooks/useSearch';
import { CityFoundCopy } from '../interfaces/interfaces';

const SearchBoxResults = () => {

  const { location } = useSearch()

  return (
      <ul className={`col-10 col-md-8 col-lg-6 show-results shadow p-0 show_results`}>
        {location.map( (l:CityFoundCopy) => <CitiesCard {...l} key={l.id}/> )}        
      </ul>
  )
}
export default SearchBoxResults