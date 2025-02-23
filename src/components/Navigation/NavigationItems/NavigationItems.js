import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
function navigationItems(props) {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact={true}>Burger Builder</NavigationItem>
            <NavigationItem link="/orders" >Orders</NavigationItem>
        </ul>
    )
}

export default navigationItems;
