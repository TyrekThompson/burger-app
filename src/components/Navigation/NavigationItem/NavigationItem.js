import React from "react";
import classes from "./NavigationItem.css";
import NavigationItem from "./NavigationItem";

const navigationItem = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>
                Burger Builder
            </NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    );
};

export default navigationItem;
