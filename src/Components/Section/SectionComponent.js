import React from "react";
import classes from './SectionComponent.module.css';
import SearchBarComponent from "./Searchbar/SearchBarComponent";
import SidepanelComponent from "./Sidepanel/SidepanelComponent";
import EventComponent from "./EventComponent/EventComponent";

export default function SectionComponent() {
  return (
    <section className={classes.section}>
      <div style={{borderBottom:"1px solid #d2cccc",padding: "0.5rem"}}>
        <SearchBarComponent />
      </div>
      <div className={classes.row}>
        <div className={classes.col_01}>
          <SidepanelComponent  />
        </div>
        <div className={classes.col_02}>
          <EventComponent />
        </div>
      </div>

    </section>
  );
}
