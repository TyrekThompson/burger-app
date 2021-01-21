import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItem/NavigationItem";
import DrawToggle from "../../Navigation/DrawerToggle/DrawerToggle";

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawToggle clicked={props.drawerToggleClicked} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default toolbar;
