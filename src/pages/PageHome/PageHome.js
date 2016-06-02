import React from "react";
import { Link } from 'react-router';
import styles from "./PageHome.css";

import Hours from '../../common/Hours/Hours';
import CurrentShows from './CurrentShows/CurrentShows';

export default class PageHome extends React.Component {
    render() {
        return (
            <div className="home padding">
                <Hours />
                <CurrentShows />
            </div>
        );
    }
}
