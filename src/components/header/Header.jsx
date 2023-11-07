import { useState } from "react";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import logo from "../../assets/header/logo.png";
import "../header/styles/header.css";
import "./styles/login-modal.css";

function Header() {
  //Mobile menu useStates
  const [isMobileMenuOpen, setMobileMenu] = useState(false);
  const [isMobileMenuClosed, setMobileMenuClosed] = useState(false);

  //Login modal useStates
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const closeModal = () => {
    setLoginModalOpen(false);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
    closeMenu();
  };

  const openMenu = () => {
    setMobileMenu((open) => !open);
    setMobileMenuClosed(false);
  };

  const closeMenu = () => {
    setMobileMenuClosed((close) => !close);
    setMobileMenu(false);
  };

  return (
    <div className="wrrapper">
      <dialog
        id="modal-login"
        className={`modal-login ${isLoginModalOpen ? "visible" : ""}`}
      >
        <h1>Faça o login em sua conta</h1>
        <div className="login-form">
          <RxCross1 onClick={closeModal} className="close-modal-btn"></RxCross1>
          <div className="input-box">
            <input type="email" name="email" className="email-input" required />
            <span>Email</span>
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              className="password-input"
              required
            />
            <span>Senha</span>
          </div>

          <button onClick={closeModal} className="login-btn" type="submit">
            Entrar
          </button>
        </div>
      </dialog>

      <header className="hero-header">
        <img src={logo} alt="logo" />
        <ul className="menu-list desktop">
          <li>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={100}
              duration={1000}
            >
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
          <button className="login-btn" onClick={openLoginModal}>
            Login
          </button>
        </ul>
        <RxHamburgerMenu
          onClick={openMenu}
          className="burger-btn"
        ></RxHamburgerMenu>
        <nav
          className={`mobile-menu ${isMobileMenuOpen ? "open" : ""} ${
            isMobileMenuClosed ? "close" : ""
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
            <button className="login-btn" onClick={openLoginModal}>
              Login
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
