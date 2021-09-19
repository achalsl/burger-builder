import React from 'react'
import classes from './Spinner.module.css'
function spinner(props) {
    return (
        <div className={classes.Loader}>
            {props.children}
        </div>
    )
}

export default spinner;
