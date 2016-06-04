import React from "react";
import api from '../../common/api/api';
import styles from './PageArtists.css';
import { Link } from 'react-router';

export default class PageArtists extends React.Component {

    constructor() {
        super();
        this.state = {
            artists: {}
        }
    }

    updateListing(letter) {
        api.getArtists(letter).then(data => { this.setState({ artists: data.data }); });
    }

    componentDidMount() {
        const letter = this.props.params.letter ? this.props.params.letter : 'a';
        this.updateListing(letter);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.params.letter !== this.props.params.letter) {
            this.updateListing(newProps.params.letter);
        }
    }

    render() {

        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

        return (
            <div className="artistsPage" key={this.props.params.letter}>
                <h1>Artists</h1>

                <div class="artistsAlpha">
                    { alphabet.map(letter => {
                        return (
                            <Link key={letter} activeClassName="active" to={`/program/artists/${letter}`}>{letter.toUpperCase()}</Link>
                        )
                    })}
                </div>

                { Object.keys(this.state.artists).map(key => {

                    const artist = this.state.artists[key];
                    return (
                        <div key={key}>
                            <Link to={`/program/artists/${artist.ID}/${artist.post_name}`}>
                                {artist.post_title} &rsaquo;
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }
}
