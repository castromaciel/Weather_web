import { CitiesCard } from './CitiesCard'
import './search-bar.css'

function ShowResults() {
  return (
    <div className={`col-5 show-results`}>
      <CitiesCard />
    </div>
  )
}

export default ShowResults