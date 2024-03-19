import React, { useState } from "react";
import Input from "../../UI/Input";
import classes from './SidepanelComponent.module.css';
import DropdownComponent from "../Dropdown/DropdownComponent";


const slidePanneldata = [
  {
    Category : "Categories",
    Items : ["5k", "10k","Halft Marathon","Full Marathon"]
  },
  {
    Category : "When",
    Items : ["This week", "This Month","This Year"]
  }
];

export default function SidepanelComponent() {

 
  return (
    // <div>
    //   <div>
    //     <Input
    //       style={{ margin: "1rem" }}
    //       type="text"
    //       className="form-control"
    //       placetext="Search by city or Area"
    //     ></Input>
    //   </div>

    //   {/* first  */}

    //   <div className={classes.first_drop}>
    //     <button 
    //       class="btn "
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#collapseWidthExample_01"
    //     >
    //       Categories
    //     </button>
    //     <div >
    //       <div class="collapse collapse-vertical" id="collapseWidthExample_01">
    //         <div class="card card-body">
    //           This is some placeholder content for a horizontal collapse. It's
    //           hidden by default and shown when triggered.
    //         </div>
    //       </div>
    //     </div>
    //   </div>


    //   {/* second  */}

    //   <div  className={classes.second_drop}>
    //     <button
    //       class="btn "
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#collapseWidthExample_02"
    //     >
    //       when
    //     </button>
    //     <div >
    //       <div class="collapse collapse-vertical" id="collapseWidthExample_02">
    //         <div class="card card-body" >
    //           This is some placeholder content for a horizontal collapse. It's
    //           hidden by default and shown when triggered.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className={classes.sidepanel}>
      <Input className={classes.sidepanelInput} placetext="search by City or area"></Input>
      {
        slidePanneldata.map(dropItem=>(
          <DropdownComponent 
            category = {dropItem.Category}
            items = {dropItem.Items}
          />
        ))
      }
    </div>

     
  );
}
