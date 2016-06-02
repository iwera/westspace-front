import React from 'react';
import { Link } from 'react-router';
import styles from './Menu.css';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <div className="menu-logo">
                    <Link to="/">
                        West Space
                    </Link>
                </div>
                <ul className="menu-menu">
                    <li>
                        <Link to="/p/visit">
                            Visit
                        </Link>
                    </li>
                    <li>
                        <Link to="/p/program">
                            Program
                        </Link>
                    </li>
                    <li>
                        <Link to="/p/about">
                            About
                        </Link>
                    </li>
                </ul>
                <div className="menu-search"><i className="fa fa-search"></i></div>
            </div>
        );
    }
}
