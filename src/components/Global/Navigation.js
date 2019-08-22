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
                    <Link to='/score' style={{ color: '#DCDCDC' }}>Score Mode</Link>
                </li>
                <li className="text-white">
                    <Link to='/player' style={{ color: '#DCDCDC' }}>VS Player Mode</Link>
                </li>
                <li className="text-white">
                    <Link to='/ia' style={{ color: '#DCDCDC' }}>VS IA Mode</Link>
                </li>
            </nav>
        )
    }
}

export default Navigation;
