import React from "react";
import styles from "./PageExhi.css";
import api from '../../common/api/api';

export default class PageExhi extends React.Component {

    constructor() {
        super();
        this.state = { exhi: {
            image: []
        } }
    }

    componentDidMount() {
        console.log(this.props.params.exhiId);
        api.getExhibition(this.props.params.exhiId).then(data => {
            console.log(data.data.post_content);
            this.setState({ exhi: data.data });
        });
    }

    render() {

        let exhi = this.state.exhi;

        return (
            <div>
                <div className="hero-image-container">
                    <img className="hero-image" src={ exhi.image[0] } width={ exhi.image[1]} height={ exhi.image[2] } />
                </div>
                <div className="text-section">
                    <h1>{ exhi.post_title }</h1>
                    <div dangerouslySetInnerHTML={ { __html: exhi.formatted_content } }></div>
                </div>
            </div>
        );
    }
}
