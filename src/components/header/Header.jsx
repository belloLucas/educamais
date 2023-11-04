import logo from "../../assets/header/logo.png";
import "../header/styles/header.css";

export default function Header() {
  return (
    <header className="hero-header">
      <img src={logo} alt="logo" />
      <ul className="menu-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Cursos</a>
        </li>
        <li>
          <a href="#">Instrutores</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
        <li className="login-btn">
          <a href="#">Login</a>
        </li>
      </ul>
    </header>
  );
}
