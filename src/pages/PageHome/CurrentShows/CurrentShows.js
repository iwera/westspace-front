import React from 'react';
import api from '../../../common/api/api';
import ExhiItem from '../../../common/ExhiItem/ExhiItem';

import styles from './CurrentShows.css';

export default class CurrentShows extends React.Component {

    constructor() {
        super();
        this.state = {
            current:  [],
            upcoming: []
        }
    }

    componentDidMount() {

        api.getCurrentShows().then(data => {
            this.setState( {
                current: data.data.items
            });
        });

        api.getUpcomingShows().then(data => {
            this.setState( {
                upcoming: data.data.items
            });

        });
    }

    render() {

        return (
            <div>
                <p>
                    Here's the current exhibitions:
                </p>

                <ul className='currentExhis'>
                    {
                        this.state.current.map(exhi => {
                            return (<ExhiItem key={exhi.ID} {...exhi} />)
                        })
                    }
                </ul>
            </div>
        );

    }
}
