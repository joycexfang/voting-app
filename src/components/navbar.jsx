import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( <nav className="navbar navbar-light bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand mx-auto text-light" href="#">Vote This or That!</a>
        </div>
      </nav> );
    }
}
 
export default NavBar;