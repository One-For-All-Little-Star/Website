import React, { Component } from "react";
import { Link } from "react-scroll";
import { slide as Menu } from "react-burger-menu";
import "../styles/header.css";

export default class MenuMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <div className="menuMobile">
        <Menu
          customBurgerIcon={<img src="assets/images/item/menu.png" />}
          right
          width={"60%"}
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <Link
            activeClass="mobile"
            className="navMobile"
            to="home"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
            isDynamic={true}
          >
            Trang Chủ
          </Link>
          <Link
            className="navMobile"
            to="tutorial"
            activeClass="mobile"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
            isDynamic={true}
          >
            Giới thiệu
          </Link>
          <Link
            className="navMobile"
            to="features"
            activeClass="mobile"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
            isDynamic={true}
          >
            Tính Năng
          </Link>
          <Link
            className="navMobile"
            to="about"
            activeClass="mobile"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
            isDynamic={true}
          >
            Chúng tôi
          </Link>
          <Link
            className="navMobile"
            to="contact"
            activeClass="mobile"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
            isDynamic={true}
          >
            Liên Hệ
          </Link>
          <Link
            className="navMobile"
            to="download"
            activeClass="mobile"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
            isDynamic={true}
          >
            Tải Về
          </Link>
        </Menu>
      </div>
    );
  }
}
