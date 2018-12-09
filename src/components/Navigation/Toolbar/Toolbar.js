import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigarionItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle open={props.open} />
    <div className={classes.LogoMobileOnly}>
      <Logo />
    </div>

    <nav className={classes.DesctopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
