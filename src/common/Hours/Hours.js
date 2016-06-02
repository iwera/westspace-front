import React from 'react';

export default class Hours extends React.Component {

    render() {

        let hours = {
            'monday': false,
            'tuesday':   { open: 12, close: 6 },
            'wednesday': { open: 12, close: 6 },
            'thursday':  { open: 12, close: 6 },
            'friday':    { open: 12, close: 6 },
            'saturday':  { open: 12, close: 6 },
            'sunday': false
        }

        return (
            <div>
                <p>
                    Hi!<br/>
                    We're open today from 12 to 6pm.
                </p>
            </div>
        );

    }
}
