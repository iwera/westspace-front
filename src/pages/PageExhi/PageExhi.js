import React from "react";
import chunk from 'chunk';
import { Link } from 'react-router';
import styles from "./PageExhi.css";
import api from '../../common/api/api';
import PageContent from '../../common/PageContent/PageContent';

export default class PageExhi extends React.Component {

    constructor() {
        super();
        this.state = {
            exhi: {
                image: [],
                meta: { artists: [] },
                attachments: []
            }
        };
    }

    componentDidMount() {
        api.getExhibition(this.props.params.exhiId).then(data => {
            this.setState({ exhi: data.data });
        });
    }

    render() {

        const exhi = this.state.exhi;

        let attachmentRows = chunk(Object.keys(exhi.attachments), 4);
        console.log(attachmentRows);

        return (
            <div>

                <div className="hero-image-container">
                    <img className="hero-image" src={ exhi.image[0] } width={ exhi.image[1]} height={ exhi.image[2] } />
                </div>

                <PageContent
                    title={exhi.post_title}
                    content={exhi.formatted_content}
                    artists={exhi.meta.artists}
                    curators={exhi.meta.curators}
                />

            <div>
                {/*
                    TODO: don't use GUID, you idiot.
                    TODO: do rows of 4 with flexbox on each without fixed height/width so the images always fit
                */}

                {
                    attachmentRows.map(row => {

                        return (<div key={row[0]} className="exhi-images">{row.map(key => {
                            const img = exhi.attachments[key];
                            const divStyle = {
                                flex: (img[1] / img[2])
                            };
                            return (<div key={key} style={ divStyle }><img src={img[0]} /></div>);

                        })}</div>)
                    })
                }
            </div>

            </div>
        );
    }
}
