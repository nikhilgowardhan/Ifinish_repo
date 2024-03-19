import React from "react";
import classes from "./MenuComponent.module.css";
import { Link } from "react-router-dom";
// import "./collapse.css";

const menuItem = [
 { linkTitle:"EVENTS", link:"/"},
 { linkTitle:"SHOP", link:"/shop"},
 { linkTitle:"ACHIEVEMENTS", link:"/signup"},
 { linkTitle:"EVENT ORGANIZERS", link:"/"},
 { linkTitle:"LIVE TRACKING", link:"/nopage"},
 { linkTitle:"VIRTUAL RACES", link:"/virtualrace"},
 { linkTitle:"+91 9985100008 | support@ifinish.in", link:"/"},
 { linkTitle:"LOGIN / SIGN", link:"/"},
];

export default function MenuComopnent() {
  return (
    <div className={classes.menu}>
      <div className={classes.btn_div}>
        <button
        id="btn"
        className="btn btn-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
      >
        <i className="bi bi-list" style={{color:'orange'}}></i>
      </button>
      </div>

      <div className="collapse" id="collapseExample">
        <div className={classes.list}>
          <ul className="card card-body">
            {menuItem.map((item) => (
              <li key={item.linkTitle}>
                <Link className={classes.anch} to={item.link}>{item.linkTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className={classes.menu_container}>
        {menuItem.map((item) => (
          <li key={item.linkTitle}>
            <Link className={classes.anch} to={item.link}>{item.linkTitle}</Link>
          </li>
        ))}
      </ul>
     
    </div>
  );
}
