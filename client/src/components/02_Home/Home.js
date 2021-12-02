 import React, { useState, useEffect } from 'react'
 import { useDispatch, useSelector } from 'react-redux'
 import { NavLink } from "react-router-dom";
 import { getAllVideos } from "../../redux/02_Actions/index.js"
 import NavBar from '../03_Navbar/Navbar.js';
 import Card   from '../06_Card/Card.js'
 import Error  from '../09_Error/Error.js'
 import Pages  from '../08_Pages/Pages.js'

 import "../02_Home/Home.css"

function Home() {
  /*Hook de Redux**************************************************************************
  //useDispatch : Permite el despacho de acciones al store de manera que se pueda acceder 
  //sin necesidad que haya que conectarnos al store.
  //useSelector : Permite Extraer o seleccionar del Estado global de mi App un Estado
  //en particular que lo devuelve a una variable o constante que definamos*/
  
  /* Hook de React*************************************************************************
  useState  : Maneja el estado local del componente 
  useEffect : Maneja ciclo de vida del componente 
  componentDidMount : Para este caso una vez se renderiza el 
  componente home en el navegador ejecuta lo que haga la funcion*/

  const dispatch = useDispatch()
  const fil_Videos = useSelector((state) => state.fil_Videos)
 
  useEffect(() => {
    dispatch(getAllVideos());
  }, [dispatch])
     
  //Evento click que recarga nuevamente todos los videogames
  function handleClick(e) {
   e.preventDefault()
   dispatch(getAllVideos())
}

//Uso del estado local para la paginacion en la ruta home.
 const [currentPage, setCurrentPage] = useState(1) // empiezo en la pag 1

//Funcion que actualiza el estado de la pagina que se va a mostrar 
 const pages = ((pageNum) => {setCurrentPage(pageNum)})

//Numero de Card mostrado por pagina (8)
 const cardPerPage = 15

/*Codigo que me sirve para lo que se va extraer del arreglo y que se
 va a mostrar en el area de visusalizacion de Card en la ruta home.*/
 
 var fin = currentPage * cardPerPage // Primera página, fin = 1 * 8 = 8
 var ini = fin - cardPerPage         // Primera página, ini = 8 - 8 = 0
 
 var currentVideos = fil_Videos.slice(ini, fin) 
/*Slice es una funcion de los arrays que permite extraer un parte del arreglo 
//teniendo en cuenta el argumento de inicio y fin de lo que se quiere extraer 
//el ultimo elemento fin no lo incluye y sin modificar el array original. 
//var currentVideos = fil_Videos.slice(0, 15) los elem extraidos serian desde index=0
//hasta el index fin-1 osea 14 */
    
  return (
       <div className ='home_Container'>
            <NavBar/>
            
            <div className ='home_Btn_Container'>
                 <button className ='home_Btn' onClick = {(e) => handleClick(e)}>
                    Reload All Videogames 
                 </button>

                 <button className='home_Btn'>
                    <NavLink className ='home_Link' to='/add'>
                       Create New Videogame
                   </NavLink>
                 </button>
            </div>
            
            <div className='home_VideoContainer'>
                  {currentVideos.length ? (
                     currentVideos.map((e) => (
                         <Card
                            key    = {e.id} 
                            id     = {e.id}
                            name   = {e.name}
                            image  = {e.background_image}
                            genres = {e.genres || []}
                        />
                      ))
                  ) : (<Error  text = {'Videogames not found. please try again'} /> )
                  }
            </div>

            <Pages 
              amountPerPage = {cardPerPage}       //props Nros. de Card por pagina = 15
              totalAmount   = {fil_Videos.length} //props longitud del array
              pageNumber    = {pages}             //props function que actualiza estado de las paginas
           />
        </div>
    )
}

export default Home;