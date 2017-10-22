import React from 'react';

import AddEvent from './../containers/AddEvent.js';
import SignUp from './SignUp.js';
import User from './../containers/User.js';


import css from './../css/Header.css';

class Header extends React.Component{
    render() {
        return (
            <header className="menu-container">
                <div className="menu">
                    <ul className="left-side">
                        <li>
                            <i className="material-icons" data-toggle="modal" data-target="#newEventModal">&#xE145;</i>
                        </li>
                        <li>
                            <i className="material-icons">&#xE2C4;</i>
                        </li>
                        <li>
                          <i className="material-icons">&#xE2C6;</i>
                        </li>
                    </ul>
                    <ul className="right-side">
                        <li><i className="material-icons" data-toggle="modal" data-target="#signupModal">&#xE853;</i></li>
                    </ul>
                </div>
                <AddEvent />
                <User />
            </header>
        );
    }
}

export default Header;
