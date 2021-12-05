import React from 'react'
import "../09_Error/Error.css"

export default function Error({ text }) {
  return (
    <div className="error_Container">
        <h1 className="error_text">
            An error has occurred...
        </h1>
        <h2 className="error_text">
            {text}
        </h2>
    </div>
  )
}