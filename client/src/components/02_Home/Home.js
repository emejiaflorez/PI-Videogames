 import React, { useState, useEffect } from 'react'
 import { useDispatch, useSelector } from 'react-redux'
 import { NavLink } from "react-router-dom";
 import { getAllVideos,  getAllGenres,     getAllPlatforms, 
          filterByGenre, filterByPlatform, orderingAction
        } from "../../redux/02_Actions/index.js"
 import NavBar from '../03_Navbar/Navbar.js';
 import Card   from '../06_Card/Card.js'
 import Error  from '../09_Error/Error.js'
 import Pages  from '../08_Pages/Pages.js'

 import "../02_Home/Home.css"

function Home() {
  /*Hook de Redux**************************************************************************
  //useDispatch : Permite el despacho de acciones al store de manera que se pueda acceder 
  //sin necesidad que haya que conectarnos al store.
  //useSelector : Permite Extraer o seleccionar del Estado global de mi App o un Estado
  //en particular que lo devuelve a una variable o constante que definamos*/
  
  /* Hook de React*************************************************************************
  useState  : Maneja el estado local del componente 
  useEffect : Maneja ciclo de vida del componente 
  componentDidMount : Para este caso una vez se renderiza el 
  componente home en el navegador ejecuta lo que haga la funcion*/

  const dispatch = useDispatch()
  const fil_Videos = useSelector((state) => state.fil_Videos)
  
  //Traer todos los videogames
    useEffect(() => {
        dispatch(getAllVideos());
        setCurrentPage(1)
        setLoad(false)
    }, [dispatch])

  const [order, setOrder] = useState('');
  const [load, setLoad] = useState(false);
  //Uso del estado local para la paginacion en la ruta home.
  const [currentPage, setCurrentPage] = useState(1) // empiezo en la pag 1
  
  //Traer todos los generos y plataformas
  useEffect(()=>{
   dispatch(getAllGenres())
  },[dispatch])  
      
  useEffect(() => {
    dispatch(getAllPlatforms())
  },[dispatch])  
  
  //Evento click que recarga nuevamente todos los videogames
  function handleClick(e) {
   e.preventDefault()
   dispatch(getAllVideos())
   setLoad(false)
  }

//Envio de funciones de Filtros por props del componente mayor: home a Navbar.
function handleFilterGenre(event) {
  dispatch(filterByGenre(event.target.value))
  setCurrentPage(1)
  setLoad(true)
}

function handleFilterPlatform(event) {
  dispatch(filterByPlatform(event.target.value))
  setCurrentPage(1)
  setLoad(true)
}

function handleFilterOrder(event){
  event.preventDefault()
  dispatch(orderingAction(event.target.value))
  setCurrentPage(1)
  setOrder(event.target.value)
  setLoad(true)
}

//Funcion que actualiza el estado de la pagina que se va a mostrar 
 const pages = ((pageNum) => {setCurrentPage(pageNum)})

//Numero de Card mostrado por pagina (15)
 const cardPerPage = 15

/*Codigo que me sirve para lo que se va extraer del arreglo y que se
 va a mostrar en el area de visusalizacion de Card en la ruta home.*/
 
// Pag=1, fin = 1 * 15 = 15  ini = 15 - 15 = 0  (0  - 15)
// Pag=2, fin = 2 * 15 = 30  ini = 30 - 15 = 15 (15 - 30)
// Pag=3, fin = 3 * 15 = 45  ini = 45 - 15 = 30 (30 - 45) .......
 
var fin = currentPage * cardPerPage 
var ini = fin - cardPerPage         
var currentVideos = fil_Videos.slice(ini, fin);

/*Slice es una funcion de los arrays que permite extraer un parte del arreglo 
//teniendo en cuenta el argumento de inicio y fin de lo que se quiere extraer 
//el ultimo elemento fin no lo incluye y sin modificar el array original. 
//var currentVideos = fil_Videos.slice(0, 15) los elem extraidos serian desde index=0
//hasta el index fin-1 osea 14 */

 return (
       <div className ='home_Container'>
            <NavBar
              filterGenre    = {handleFilterGenre} 
              filterPlatform = {handleFilterPlatform} 
              filterOrder    = {handleFilterOrder}
            />
            
            <div className ='home_Btn_Container'>
                 <button className ='home_Btn' onClick = {(e) => handleClick(e)}>
                    Reload All Videogames 
                 </button>

                 <button className='home_Btn'>
                    <NavLink className ='home_Link' to='/videogame/add'>
                       Create New Videogame
                   </NavLink>
                 </button>
            </div>
            
            <div className='home_VideoContainer'>
                 {
                   currentVideos.length ? (
                     currentVideos.map((e) => (
                         <Card
                            key    = {e.id} 
                            id     = {e.id}
                            name   = {e.name}
                            image  = {e.background_image}
                            genres = {e.genres || []}
                            rating = {e.rating}
                        />
                      ))
                    ) 
                    : 
                     !load 
                       ? (<Error 
                             text1={'Wait'} 
                             text2 = {'Cargando Videogames....'} 
                          /> ) 
                       : (<Error 
                             text1={'An error has occurred...'} 
                             text2 = {'Videogames not found. please try again'} 
                         /> )
                         
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