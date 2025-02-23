import React from 'react'
import classes from './Logo.module.css'
import burgerLogo from '../../assets/images/burger-logo.png'
function logo(props) {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={burgerLogo} alt="MyBurger" />
        </div>
    )
}

export default logo;
