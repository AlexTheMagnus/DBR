import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <li className="text-white">
                    <Link to='/' style={{ color: '#DCDCDC' }}>Home</Link>
                </li>
                <li className="text-white">
                    <Link to='/score' style={{ color: '#DCDCDC' }}>Modo Score</Link>
                </li>
                <li className="text-white">
                    <Link to='/player' style={{ color: '#DCDCDC' }}>Modo VS Player</Link>
                </li>
                <li className="text-white">
                    <Link to='/ia' style={{ color: '#DCDCDC' }}>Modo VS IA</Link>
                </li>
            </nav>
        )
    }
}

export default Navigation;
