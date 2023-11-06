import { useState } from "react";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import logo from "../../assets/header/logo.png";
import "../header/styles/header.css";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isClosed, setClose] = useState(false);

  const openMenu = () => {
    setOpen((open) => !open);
    setClose(false);
  };

  const closeMenu = () => {
    setClose((close) => !close);
    setOpen(false);
  };

  return (
    <header className="hero-header">
      <img src={logo} alt="logo" />
      <ul className="menu-list desktop">
        <li>
          <Link to="hero" spy={true} smooth={true} offset={100} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            Cursos
          </Link>
        </li>
        <li>
          <Link
            to="enroll"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="instructors"
            spy={true}
            smooth={true}
            offset={70}
            duration={1000}
          >
            Instrutores
          </Link>
        </li>
        <li>
          <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
          >
            Contato
          </Link>
        </li>
        <li className="login-btn">
          <Link href="#">Login</Link>
        </li>
      </ul>
      <RxHamburgerMenu
        onClick={openMenu}
        className="burger-btn"
      ></RxHamburgerMenu>
      <nav
        className={`mobile-menu ${isOpen ? "open" : ""} ${
          isClosed ? "close" : ""
        } `}
      >
        <RxCross1 onClick={closeMenu} className="close-btn"></RxCross1>
        <ul className="menu-list">
          <li>
            <Link
              onClick={closeMenu}
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="courses"
              spy={true}
              smooth={true}
              offset={3}
              duration={1000}
            >
              Cursos
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="enroll"
              spy={true}
              smooth={true}
              offset={30}
              duration={1000}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="instructors"
              spy={true}
              smooth={true}
              offset={80}
              duration={1000}
            >
              Instrutores
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="footer"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              Contato
            </Link>
          </li>
          <li className="login-btn">
            <Link href="#">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
