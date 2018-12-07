import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const logo = props => (
  <div>
    <img src={burgerLogo} alt="BurgerBurg" className={classes.Logo} />
  </div>
);

export default logo;
