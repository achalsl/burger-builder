import React from 'react'
import classes from './Layout.module.css'
function Layout(props) {
    return (
        <>
            <div>Toolbar, Sidebar, Backdrop</div>
            <main className={classes.Content}>props.children</main>
        </>
    )
}

export default Layout;
