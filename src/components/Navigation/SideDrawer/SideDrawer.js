import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItem/NavigationItem";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop/Backdrop";
import Aux from "../../hoc/Aux";

const sideDrawer = (props) => {
    // Set classes array to contain certain classes depending on state of open
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(" ")}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;