import React, { Component } from 'react';

import logo from '../../diceqmark.svg'

class Page404 extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 style={{ color: '#DCDCDC' }}>
                        <strong>
                            Error 404
                        </strong>
                    </h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p style={{ color: '#DCDCDC' }} >
                        "It looks like you are lost"
                    </p>
                </header>
            </div>
        );
    }
}

export default Page404;
