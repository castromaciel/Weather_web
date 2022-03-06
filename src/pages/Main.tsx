import SearchCity from '../components/SearchBar/SearchCity';
import ShowResults from '../components/SearchBar/ShowResults';

function Main() {
  return (
    <div className='mt-5 d-flex flex-column align-items-center'>
      <SearchCity />
      <ShowResults />
    </div>
  )
}

export default Main