import React, { Component } from 'react';

import logo from '../../dicelogo.svg'

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 style={{ color: '#DCDCDC' }}>
                        <strong>
                            Welcome to DBR
                        </strong>
                    </h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p style={{ color: '#DCDCDC' }} >
                        "Do a Barrel Roll" is always a good option
                    </p>
                    <a
                        className="App-link"
                        href="https://github.com/AlexTheMagnus"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#A9A9A9' }}
                    >
                        Read more here
                    </a>
                </header>
            </div>
        );
    }
}

export default Home;
