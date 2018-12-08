import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigarionItems/NavigationItems";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.LogoMobileOnly}>
      <Logo />
    </div>

    <nav className={classes.DesctopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
