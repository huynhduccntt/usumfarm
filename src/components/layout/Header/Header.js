import React, { Component } from 'react';
import logo from "../logo.svg";
import Menu from "../Menu/Menu"

export default class Header extends Component {
  render() {
    return (
      <div>
            <div className="container">
                <div className="row align-items-center justify-content-between d-flex">
                    <div id="logo">
                        <a href="index.html">
                            <img src={logo}/>
                        </a>
                    </div>
                   <Menu></Menu>
                </div>
            </div>
      </div>
    )
  }
};
