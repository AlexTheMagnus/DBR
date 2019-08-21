//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

//import {Link} from 'react-router';

//Components
import Navigation from './Global/Navigation.js'
import Content from './Global/Content.js'

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
      const { children } = this.props;

      return (
        <div className="App">
            <Navigation />
            <Content body={children} />
        </div>
      );
    }
  }
export default App;
