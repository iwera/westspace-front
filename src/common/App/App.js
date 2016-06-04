import React from 'react';
import Menu from '../Menu/Menu.js';

export default class App extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
    }


    render() {
        return (
            <div id="container">

                { React.cloneElement(this.props.children) }

                <Menu path={this.props.location.pathname}></Menu>
            </div>
        )
    }
}
