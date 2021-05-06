import React, { Component, useRef } from 'react';

import './assets/styles/base.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Launches from './components/Launches';
import LaunchItem from './components/LaunchItem';

/**
 * Base component for the application
 */
class App extends Component {

  /**
   * The header component contains a scroll down button that when clicked
   * should scroll the page down to where the main content starts
   */
  handleScrollClick = () => {
    // let cur_el = document.getElementById('resultStart');
    // cur_el.scrollIntoView({behavior: "smooth"});
    window.scrollTo({
      top: document.getElementById("launcheStart").offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  };

  /**
   * The footer contains a back to top button that should scrool
   * the page back up to where the results start
   */
  handleBackToTopClick = () => {
    // let cur_el = document.getElementById('resultStart');
    // cur_el.scrollIntoView({behavior: "smooth"});
    window.scrollTo({
      top: document.getElementById("resultStart").offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div className="App">
        <Header onScrollClick={this.handleScrollClick} />
        <main>
          <Launches />
        </main>
        <Footer onBackToTopClick={this.handleBackToTopClick} />
      </div>
    );
  }
}

export default App;
