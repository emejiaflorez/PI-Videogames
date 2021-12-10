import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux'
import { getVideosByName } from '../../redux/02_Actions/index.js'

import '../04_Search/Search.css'

function Search() {
    // useEffect(() => {document.getElementById("inputText").focus();}, [])
    
    const dispatch = useDispatch()
    
    const [input, setInput] = React.useState('')
    
    const handleOnChange = (event) => {
       event.preventDefault();
       setInput(event.target.value)
    }
    
    const handleOnClick = (event) => {
       event.preventDefault();
       dispatch(getVideosByName(input));
       setInput('');
    }
    
    return (
        <div className='search_Container'>
             <input
                 className='search_Input'
                 type='text'
                 id = 'inputText'
                 value={input}
                 placeholder='Search by names...'
                 onChange = {handleOnChange}
                 autoFocus
             />
             <button 
                 className='search_Btn' 
                 type='submit'
                 onClick = {handleOnClick}
             >
               Search 
             </button>
         </div>
      )
}

export default Search;