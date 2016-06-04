import React from "react";
import {Link} from 'react-router';
import styles from "./PageArtist.css";
import api from '../../common/api/api';

export default class PageArtist extends React.Component {

    constructor() {
        super();
        this.state = {
            artist: {
                exhis: {},
                curators: {}
            }
        }
    }

    componentDidMount() {
        api.getArtist(this.props.params.artistId).then(data => {
            this.setState({ artist: data.data });
        });
    }

    render() {

        const artist = this.state.artist;
        let years = {};
        Object.keys(artist.exhis).map(key => {
            const exhi = artist.exhis[key];
            if (!years[exhi.year]) { years[exhi.year] = []; }
            years[exhi.year].push(exhi);
        });

        return (
            <div className="artistPage">
                <h1>{artist.post_title}</h1>
                <div>
                    {artist.post_content}
                </div>
                <div>
                    <h2>Exhibitions</h2>

                    { Object.keys(years).reverse().map(year => {
                        return (
                            <div className="artistYear" key={year}>
                                <h3>{year}</h3>
                                { years[year].map(exhi => {
                                    return (
                                        <div key={exhi.ID}>
                                            <Link to={`/exhi/${exhi.ID}/${exhi.post_name}`}>
                                                {exhi.type == 'curator' ? "(curated) " : null }
                                                {exhi.post_title} &rsaquo;
                                            </Link>
                                        </div>);
                                })}
                            </div>
                        )
                    })}

                </div>

            </div>
        );
    }
}
