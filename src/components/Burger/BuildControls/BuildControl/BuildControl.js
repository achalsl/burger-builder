import React from 'react'
import classes from './BuildControl.module.css'

function buildControl(props) {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            {/*<button*/}
            {/*    className={classes.Less}*/}
            {/*    onClick={props.removed}*/}
            {/*    disabled={props.disabled}>Less</button>*/}
            <button
                className={classes.Less}
                disabled={props.disabled}
                onClick={props.removed}
            >
                Less
            </button>
            <button
                className={classes.More}
                onClick={props.added}>More</button>
        </div>
    )
}

export default buildControl;
