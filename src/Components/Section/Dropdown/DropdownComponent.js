import React from 'react';
import { useState } from 'react';
import classes from './DropdownComponent.module.css'

export default function DropdownComponent({category, items}) {

const [dropClick, setDropClick] = useState(false)
  

  return (
    <div className={classes.dropdown}>
      <div className={classes.btn} >
        <span onClick={()=> setDropClick(!dropClick)}>{category}</span>
        <span >Clear</span>
      </div>
      {
        dropClick && (
          <div className={classes.dropdown_content}>
            {
                items.map(item=>(
                    <div>
                        <input type='checkbox' />
                        {item}
                    </div>
                ))
            }
         </div>
        )
      }

    </div> 
  )
}
