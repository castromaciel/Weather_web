import SearchInput from '../components/Search/components/SearchInput/SearchInput';
import SearchBoxResults from '../components/Search/components/SearchBox/SearchBoxResults';

function Main() {


  return (
    <div className='mt-5 d-flex flex-column align-items-center'>
      <SearchInput />
      <SearchBoxResults />
    </div>
  )
}

export default Main