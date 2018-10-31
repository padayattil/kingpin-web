import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';

import './App.css';
import AppHeader from './components/AppHeader';
import Sidebar from './components/Sidebar';
import AppFooter from './components/AppFooter';
import HomePage from './components/HomePage';
import QuestionsPage from './components/QuestionsPage';


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
      <div className="App site-container">
        <Sidebar visibility={this.state.sidebarVisibility} toggleSidebar={this.toggleSidebar} />
        <AppHeader toggleSidebar={this.toggleSidebar} />
        <Route exact path='/' render={() => (
            <HomePage />
          )} />
        <Route exact path='/event/:event_id/questions' render={() => (
            <QuestionsPage />
          )} />
        <AppFooter />
      </div>
    );
  }
}

export default App;
