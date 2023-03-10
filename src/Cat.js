import React from 'react'

export default function Cat(props) {
  return (
    <div>
        <h1>{props.mouse.x}</h1>
        <h1>{props.mouse.y}</h1>
    </div>
  )
}
