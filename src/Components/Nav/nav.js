import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './nav.css'

const nav = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className='toolbar__toggle-button'>
                <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="toolbar__logo"><a href="/">schlenkianYTD</a></div>
                <div className="spacer"/>
                <div className="toolbar__navigation-items">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default nav;
