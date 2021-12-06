 import React, { useState, useEffect } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import { NavLink } from "react-router-dom";
 import { addVideogame } from "../../redux/02_Actions/index.js"
 import "../10.Form/Form.css";

 export default function Form() {
      const dispatch = useDispatch()
      const  all_Genres    = useSelector((state) => state.all_Genres)
      const  all_Platforms = useSelector((state) => state.all_Platforms)
      
      //Funcion de Orden de los dos arrglos de objetos lexicograficamente x Atributo name Asc.
      const OrdenamientoAsc = (arrayObjects, atributo)=>{
         arrayObjects.sort((e1, e2) => {
            if (e1[atributo] < e2[atributo]) return -1;
            if (e1[atributo] > e2[atributo]) return  1;
            if (e1[atributo]===e2[atributo]) return  0; 
         })
      }
      OrdenamientoAsc(all_Genres,"name"); OrdenamientoAsc(all_Platforms,"name");
     
      //Estados locales del componente Form***************************************************
      const [form, setForm] = React.useState(
       {name:"", description: "", released:"", rating:"", platforms:[], image:"", genres:[]}
      )

     //Funcion que limpia el Formulario *******************************************************
     const clear_form = () =>{
       setForm(
       {name:"", description:"", released:"", image:"",  rating:"",  genres:[], platforms:[]})
     }
    
     //Funcion que Valida la entradas requeridas del formulario********************************
     //Requireds : Name, Description, Platforms, Genres (no estoy seguro) 
     const validate_form = () => {
       if(form.name.length > 0 && form.description.length > 0 && form.platforms.length > 0){
          return true ;   
       } else {
          if (form.name.length===0) {
            console.log("The name of the video game is required")
            alert("The name of the video game is required ");
            return false;
          }
          if (form.description.length===0) {
            alert("The description of the video game is required ");
            return false;
          }   
          if (form.platforms.length===0) {

            alert("The video game platforms is required");
            return false;
          }
       }
     }

    //Event Onchange Inputs Text****************************************************************
     const handleOnChange = (event) => {
         setForm({
           ...form,
             [event.target.name]: event.target.value
         })
     }
 
     //Event Onchange Select Text****************************************************************
     const handleOnChangeSelect=(event) =>{ 
        var selObj = document.getElementById(event.target.id);      
        var selectedArray = [];
        var count = 0;
        for ( var i = 1; i < selObj.options.length; i++) { 
              if (selObj.options[i].selected) {
                  selectedArray[count] = selObj.options[i].value;
                  count++; 
              } 
        } 
        setForm({
            ...form,
              [event.target.name]: selectedArray
        })
     }

    //Event Submit******************************************************************************
    const handleSubmit = (event)=>{
      event.preventDefault()
      if (validate_form()===true){
          dispatch(addVideogame(form)); 
          alert("video game saved successfully");
          clear_form();
      }
    }

    return (
         <div className ='form_Container'>
              <h1 className="form_Title">Create New Videogame </h1>
              
              <form onSubmit={handleSubmit} > 
                  
                  <div className="form_TextContainer">
                     <label className='label'>Name
                       <input className="input"
                         type  ='text'
                         value = {form.name}
                         name  = 'name'
                         placeholder = 'input name....(required)***'
                         onChange = {handleOnChange}
                       />
                     </label>

                     <label className='label'>Image
                        <input className="input"
                          type  ='text'
                          value = {form.image}
                          name  = 'image'
                          placeholder = 'input image....'
                          onChange = {handleOnChange}
                        />
                     </label>   

                     <label className='label'>Description
                        <textarea className="inputDescription"
                          type  = 'text'
                          value = {form.description}
                          name  = 'description'
                          placeholder = 'input description....(required)***'
                          onChange = {handleOnChange}
                        />
                     </label>

                     <label className='label'>Rating
                        <input className="input"
                          type  = 'text'
                          value = {form.rating}
                          name  = 'rating'
                          placeholder = 'input rating....'
                          onChange = {handleOnChange}
                        />   
                     </label>

                     <label className='label'>Released
                        <input className="input"
                          type  = 'date'
                          value = {form.released}
                          name  = 'released'
                          onChange = {handleOnChange}
                        />
                     </label>
                     
                     <label className='label'>Genres
                       <select id="selectgenres" name="genres" className="select" multiple 
                        onChange={handleOnChangeSelect}>
                           <option value="" disabled selected>GENRES SELECTION...</option>
                          {all_Genres.length > 0 && all_Genres.map(e =>
                               <option key={e.id} value={e.id}>{e.name}</option>)}  
                       </select>
                      </label>

                      <label className='label'>Platforms
                       <select id="selectplatform" name="platforms" className="select" multiple  onChange = {handleOnChangeSelect}>
                          <option value="" disabled selected>PLATFORMS SELECTION...(required)***</option>
                          {all_Platforms.length > 0 && all_Platforms.map(e =>
                               <option key={e.id} value={e.id}>{e.name}</option>)}  
                       </select>
                      </label>

                  </div>
                 
                  <div className="form_BtnContainer">
                      <button id="btn_go" className='form_Btn'>
                          <NavLink className ='form_Link' to='/home'>
                              Go to back
                          </NavLink>
                      </button>
                      
                      <input id="btn_save" type="submit" value="Create New Videogame" className='form_Btn'/>             
                  
                   </div>
              </form>
         </div>
   )
}
