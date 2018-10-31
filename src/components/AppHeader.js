import React, { Component } from 'react';

import logo from '../images/logo.png';

class AppHeader extends Component {
  render() {
    return (
      <nav className="AppHeader navbar fixed-top navbar-expand-md navbar-light bg-white shadow">
        <button className="navbar-toggler sidebar-toggler" type="button" onClick={() => this.props.toggleSidebar()}>
          <span className="material-icons text-secondary">menu</span>
        </button>
        <a className="navbar-brand" href="#">
          <img className="app-header-logo" src={logo} alt="" />
        </a>
        <button className="app-header-login collapse navbar-collapse btn btn-outline-success my-2 my-sm-0" type="submit">Log In</button>
      </nav>
    );
  }
}
export default AppHeader;
