import React, { Component } from 'react';
import ShowingApps from './showingApps/showingApps';
import Header from './header/header';
import './wrapper.scss';

export default class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <ShowingApps />
      </div>
    )
  }
}
