import { NavLink } from "react-router-dom";
import NavBar from '../03_Navbar/Navbar.js';
import "../02_Home/Home.css"

function Home() {
     return (
       <div className ='home_Container'>
            <NavBar/>

            <div className ='home_Btn_Container'>
                 <button className ='home_Btn' >
                    Reload All Videogames 
                 </button>

                 <button className='home_Btn'>
                    <NavLink className ='home_Link' to='/add'>
                       Create New Videogame
                   </NavLink>
                 </button>
            </div>
        </div>
    )
}

export default Home;