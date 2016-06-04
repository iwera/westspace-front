import React from 'react';
import { Link } from 'react-router';
import styles from './_SubMenu.css';

export default class SubMenu extends React.Component {

    componentDidMount() {
    }

    render() {

        const parent = this.props.parent;
        const children = this.props.children;

        return (
            <div className="sub-menu">

                <div className="sub-parent">
                    <Link
                        activeClassName="active"
                        to={`/${parent.uri}`}>
                        { parent.title }
                    </Link>
                </div>

                <ul className="sub-children">
                    { Object.keys(children).map(key => {

                        const item = children[key];

                        console.log(item);
                        return (
                            <li key={key}>
                                <Link activeClassName="active" to={`/${parent.uri}/${item.slug}`}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    }) }
                </ul>

            </div>
        );
    }
}
