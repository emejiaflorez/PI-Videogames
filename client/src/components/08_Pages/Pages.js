import React from 'react'
import '../08_Pages/Pages.css'

export default function Pages({ amountPerPage, totalAmount, pageNumber }) {
  const pageNumbers = []

  //La función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
  //Ejemplo : Math.ceil(4) = 4 Math.ceil(0.95) = 1
  //Con este codigo estamos generando un arreglo de elementos que va contener el numero de
  //paginas que se va llevar nuestro contenido traido desde la API y la BD.
  for (let i = 1; i <= Math.ceil(totalAmount / amountPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className='page_NumBar'>
      <div className='page_NumContainer'>
        {pageNumbers &&
          pageNumbers.map((num) => {
            return (
              <a
                key={num}
                className='page_Number'
                onClick={() => pageNumber(num)}
              >
                {num}
              </a>
            )
          })}
      </div>
    </nav>
  )
}
