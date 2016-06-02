import React from "react";
import api from '../../common/api/api';
import ExhiItem from '../../common/ExhiItem/ExhiItem';

export default class PageExhiYear extends React.Component {

    constructor() {
        super();
        this.state = {
            exhis: []
        }
    }

    componentDidMount() {
        console.log(this.props.params.year);
        api.getExhibitionYear(this.props.params.year).then(data => {
            console.log( data.data.items );
            this.setState({ exhis: data.data.items });
        });
    }

    render() {

        let exhis = this.state.exhis;

        return (
            <div className="padding">
                <h1>{ this.props.params.year }</h1>
                <ul className="no-style">
                    { this.state.exhis.map( exhi => { return (<ExhiItem key={exhi.ID} {...exhi} />); } )}
                </ul>
            </div>
        );
    }
}
