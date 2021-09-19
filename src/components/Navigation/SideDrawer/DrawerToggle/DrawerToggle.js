import React from 'react'
import classes from './DrawerToggle.module.css'
import MenuIcon from '@material-ui/icons/Menu';
function drawerToggle(props) {
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <MenuIcon style={{color: 'white', height: '1.5em', width: '1.5em'}}/>
        </div>
    )
}

export default drawerToggle;
