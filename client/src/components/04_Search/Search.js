import React from "react";
import '../04_Search/Search.css'

function Search() {
      return (
        <div className='search_Container'>
             <input
                 className='search_Input'
                 type='text'
                 placeholder='Search Videogames...'
             />
             <button
                 className='search_Btn'
                 type='submit'
             >
              Search
             </button>
         </div>
      )
}

export default Search;