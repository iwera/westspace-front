import React from 'react';
import styles from './PageContent.css';
import { Link } from 'react-router';

export default class PageContent extends React.Component {

    render() {
        return (
            <div className="text-section">
                <h1>
                    { this.props.title }
                </h1>

                <div className="text-section-artists">
                    {
                        this.props.artists ?
                        this.props.artists.map(artist => {
                            return (
                                <div key={artist.ID}>
                                    <Link to={`/program/artists/${artist.ID}/${artist.post_name}`}>
                                        {artist.post_title}
                                    </Link>
                                </div>
                            );
                        })
                        : null
                    }
                    {
                        this.props.curators ?
                        this.props.curators.map(artist => {
                            return (
                                <div key={artist.ID}>
                                    <Link to={`/artists/${artist.ID}/${artist.post_name}`}>
                                        cur. {artist.post_title}
                                    </Link>
                                </div>
                            );
                        })
                        : null
                    }
                </div>

                <div className="text-section-text" dangerouslySetInnerHTML={ { __html: this.props.content } }></div>

            </div>
        );
    }

}
