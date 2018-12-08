import React from "react";
import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigarionItems/NavigationItems";

const sideDrawer = props => {
  return (
    <div className={classes.SideDrawer}>
      <div>
        <Logo />
      </div>
      <hr />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
