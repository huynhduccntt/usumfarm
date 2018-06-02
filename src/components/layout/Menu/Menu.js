import React, { Component } from 'react';

import logo from "../logo.svg";
export default class Menu extends Component {
  render() {
    return (
      <div>
            <nav id="nav-menu-container">
                <ul className="nav-menu">
                    <li className="menu-active"><a href="#home">Giới thiệu</a></li>
                    <li><a href="#feature">Sản phẩm</a>
                        <ul>
                            <li><a href="generic.html">Generic</a></li>
                            <li><a href="elements.html">Elements</a></li>
                        </ul></li>
                    <li><a href="#weoffer">Mua hàng online</a></li>
                    <li><a href="#about">Tin tức</a></li>
                    <li><a href="#contact">Góc chia sẻ</a></li>
                    <li className="menu-has-children"><a href>Liên hệ</a>
                    </li>
                </ul>
            </nav>{/* #nav-menu-container */}
      </div>
    )
  }
};
