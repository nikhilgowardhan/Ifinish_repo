import React from 'react'

export default function Input({children, placetext,...props}) {

  return (
    <input placeholder={placetext} {...props}>{children}</input>
  )
}
