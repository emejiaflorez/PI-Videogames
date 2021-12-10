import React from 'react'
import "../09_Error/Error.css"

export default function Error({ text1, text2 }) {
  return (
    <div className="error_Container">
        <h1 className="error_text"> {text1} </h1>
        <h2 className="error_text"> {text2} </h2>
    </div>
  )
}