import React from 'react';
import { Link } from 'react-router';
import api from '../api/api.js';
import styles from './Menu.css';
import SubMenu from './_SubMenu.js';
import { withRouter }from 'react-router';

class Menu extends React.Component {

    constructor() {
        super();
        this.state = {
            menu: {}
        }
    }

    componentDidMount() {
        api.getMenu()
           .then(data => {
               this.setState({ menu: data.data });
        });
    }

    render() {

        const menu = this.state.menu;

        return (
            <div className="menu">
                <div className="menu-logo">
                    <Link to="/">
                        West Space
                    </Link>
                </div>

                <ul className="menu-menu">

                    { Object.keys(menu).map(key => {

                        const item = menu[key];
                        var currentParent = this.props.path.split('/')[1];

                        return (
                            <li key={key}>
                                <Link
                                    to={`/${key}`}
                                    className={currentParent === key ? 'active' : 'null'}
                                >
                                    {item.title}
                                </Link>

                                { currentParent === key && Object.keys(item.children).length ?
                                    <SubMenu
                                        parent={ {uri:key, title:item.title} }
                                        children={item.children}
                                    />
                                    : null
                                }
                            </li>
                        );
                    })}

                </ul>

                <div className="menu-search"><i className="fa fa-search"></i></div>
            </div>
        );
    }
}

export default withRouter(Menu);
