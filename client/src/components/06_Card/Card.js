import React from "react"
import { NavLink } from "react-router-dom";
import '../06_Card/Card.css'

const Card_Dog = ({id, name, image, genres }) => {
    let generos=[]; genres.map(e=> generos.push(e.name))
    return (
        <div className = 'card_Container' key = {id}>
            <img className = 'card_Image'  src = {image} alt = 'Videogames image' />
            <div className = 'card_TextContainer' >  
               <NavLink className = 'card_Link' to = {`/videos/${id}`}>
                   <h3 className ='card_Name'> {name}</h3>
               </NavLink>
               <p className = 'card_Genres1'><strong className = 'card_Genres2'>Genres :  </strong>{generos.join(', ')}</p>
           </div>
        </div>
    )
}

export default Card_Dog;