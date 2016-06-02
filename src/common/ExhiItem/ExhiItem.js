import React from 'react';
import { Link } from 'react-router';
import styles from './ExhiItem.css';

export default class ExhiItem extends React.Component {

    render() {
        return (
            <li className="exhiItem">
                <Link to={`/exhi/${this.props.ID}/${this.props.post_name}`}>
                    <h4>{ this.props.meta.Location }</h4>
                    <h2>{ this.props.post_title }</h2>
                    <h3>{ this.props.meta.Artist }</h3>
                </Link>
            </li>
        )
    }

}
