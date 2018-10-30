import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';

import './App.css';
import AppHeader from './components/AppHeader';
import Sidebar from './components/Sidebar';
import AppFooter from './components/AppFooter';


class App extends Component {
  state = {
    sidebarVisibility: 'hide'
  }

  toggleSidebar = () => {
    console.log('bla');
    this.setState((state) => ({sidebarVisibility: state.sidebarVisibility === 'show' ? 'hide' : 'show'}));
  }

  render() {
    return (
      <div className="site-container">
        <Sidebar visibility={this.state.sidebarVisibility} toggleSidebar={this.toggleSidebar} />
        <div className="main-content">
          <AppHeader toggleSidebar={this.toggleSidebar} />
          <main role="main">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h2>Heading</h2>
                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                  <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-md-4">
                  <h2>Heading</h2>
                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                  <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-md-4">
                  <h2>Heading</h2>
                  <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
              </div>
            </div>

          </main>
          <AppFooter />
        </div>
      </div>
    );
  }
}

export default App;
