import React from "react";
import '../03_Navbar/Navbar.css';
import Search from '../04_Search/Search.js';

function NavBar() {
    return (
          <div className='nav_Container'>
            <h1 className='nav_Logo' >
             <div><img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' /></div>
             <span className='nav_Titulo'>Individual Project - Henry Videogames</span>
            </h1>
    
            <Search/>

            <div className='nav_Fil_Container'>
              <select className='nav_Filter' >
                <option value='All'>Filter All genres ...</option>
                <option value='g1'>g1</option>
                <option value='g2'>g2</option>
                <option value='g3'>g3</option>
              </select>
    
              <select className='nav_Filter' >
                <option value='All'>Filter All video...</option>
                <option value='t1'>t1</option>
                <option value='t2'>t2</option>
                <option value='t3'>t2</option>
              </select>
    
              <select className='nav_Filter' >
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