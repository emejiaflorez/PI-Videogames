import React, { useState, useEffect } from 'react'
import '../03_Navbar/Navbar.css';
import Search from '../04_Search/Search.js';
import { getAllVideos} from "../../redux/02_Actions/index.js"
import { useDispatch, useSelector } from 'react-redux'

function NavBar( { filterGenre,  filterOrder } ) {
  const  all_Genres = useSelector((state) => state.all_Genres);
  const  all_Platforms = useSelector((state) => state.all_Platforms);
  
  const OrdenamientoAsc = (arrayObjects, atributo)=>{
    arrayObjects.sort((e1, e2) => {
       if (e1[atributo] < e2[atributo]) return -1;
       if (e1[atributo] > e2[atributo]) return  1;
       if (e1[atributo]===e2[atributo]) return  0; 
    })
 }
 OrdenamientoAsc(all_Genres,"name");OrdenamientoAsc(all_Platforms,"name");

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllVideos());
  }, [dispatch])

  return (
          <div className='nav_Container'>
            <h1 className='nav_Logo' >
             <div><img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' /></div>
             <span className='nav_Titulo'>Individual Project - Henry Videogames</span>
            </h1>
    
            <Search/>

            <div className='nav_Fil_Container'>
              <select className ='nav_Filter' onChange={(e) => filterGenre(e)}>
                 <option value='All'>Filter All Genres...</option>
                 {all_Genres.length > 0 && all_Genres.map(e =>
                    <option value = {e.id}> {e.name} </option>
                 )} 
              </select>

              <select className='nav_Filter' >
                <option value='All'>Filter All Platforms...</option>
                {all_Genres.length > 0 && all_Platforms.map(e =>
                    <option value = {e.id}> {e.name} </option>
                )} 
              </select>
    
              <select className='nav_Filter' onChange={filterOrder}>
                <option value='AZ'>Order by...</option>
                <option value='AZ'>Name (Asc)</option>
                <option value='ZA'>Name (Desc)</option>
                <option value='Rating_Asc'>Rating (Asc)</option>
                <option value='Rating_Desc'>Rating (Desc)</option>
              </select>
            </div>
          </div>
      )
    }

export default NavBar;