// import { useState } from "react"
import { getCity } from '../../services/getCity';

function SearchCity() {

  return (
    <div  className='d-flex align-items-center justify-content-center w-100' >
      <div className="d-flex flex-column align-items-center col-5">
        <label htmlFor="search-city" className="fs-3  form-label">Search</label>
        <input 
          type="text" 
          className="form-control" 
          id="search-city" 
          placeholder="City..." 
          autoComplete="off"
          onChange={
            (e) => {
              getCity(e.target.value);
            }
          } 
        />
      </div>
    </div>
  )
}

export default SearchCity