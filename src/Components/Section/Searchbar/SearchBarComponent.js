import React from 'react'
import Input from '../../UI/Input'

export default function SearchBarComponent() {
  return (
    <div className='input-group' style={{width:'15rem'}}>
      <Input type='text' className='form-control' style={{border:'none'}} placetext='Search for Events'></Input>
      <span className='input-group-text' style={{border:'none'}}>
        <i className="bi bi-search" ></i>
      </span>
    </div>
  )
}
