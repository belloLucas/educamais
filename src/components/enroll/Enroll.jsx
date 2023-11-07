import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

import "./styles/enroll.css";
import "./styles/contact-modal.css";

import woman from "../../assets/enroll/woman.png";

export default function Enroll() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const closeContactModal = () => {
    document.querySelector(".contact-modal").close();
    setContactModalOpen(false);
  };

  const openContactModal = () => {
    document.querySelector(".contact-modal").showModal();
    setContactModalOpen(true);
  };

  return (
    <div className="wrapper">
      <dialog
        className={`contact-modal ${isContactModalOpen ? "visible" : ""}`}
      >
        <RxCross1 onClick={closeContactModal} className="close-btn"></RxCross1>
        <h1>Entre em contato com a nossa equipe</h1>
        <div className="form-wrapper">
          <div className="form-box">
            <input autoComplete="false" type="text" name="name" required />
            <span>Nome</span>
          </div>
          <div className="form-box">
            <input autoComplete="false" type="email" name="email" required />
            <span>Email</span>
          </div>
          <div className="form-box">
            <input autoComplete="false" type="tel" name="phone" required />
            <span>Telefone</span>
          </div>
          <button onClick={closeContactModal} className="send" type="submit">
            Enviar
          </button>
        </div>
      </dialog>

      <section id="enroll" className="enroll">
        <img src={woman} alt="" />
        <div className="texts">
          <h1>
            Construa seu futuro em uma das melhores escolas de tecnologia do
            Brasil
          </h1>
          <p className="text">
            Nossa escola de cursos de tecnologia oferece programas de formação
            de alta qualidade para ajudar os alunos a alcançarem seus objetivos
            e se destacarem no mercado. Com uma equipe de instrutores altamente
            qualificados e tecnologias avançadas, nós preparamos nossos alunos
            para o futuro da tecnologia.
          </p>
          <button onClick={openContactModal} className="btn" href="#">
            Matricular agora!
          </button>
        </div>
      </section>
    </div>
  );
}
