import React from "react";
import styles from "./style.css";

export default class PageStandard extends React.Component {

    componentDidMount() {
        document.title = `West Space • ${this.props.params.pageName}`;
    }

    render() {
        return (
            <div>
                <h1>{ this.props.params.pageName }</h1>
            </div>
        );
    }

}
