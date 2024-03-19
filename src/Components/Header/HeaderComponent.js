import React from "react";
import classes from "./HeaderComponent.module.css";
import MenuComopnent from "./MenuComponent/MenuComopnent";
import { Link } from "react-router-dom";


export default function HeaderComponent() {
  return (
    <>
      <header className={classes.header}>
        <div>
        <Link  to="/">
          <img
            src="https://www.ifinish.in/images/logo.png"
            alt="logo"
            height="36"
          />
          </Link>
        </div>
        <div>LOGIN / SIGN UP</div>
    </header>
    <MenuComopnent />
    </>
  );
}
