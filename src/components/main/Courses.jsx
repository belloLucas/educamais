import "./styles/courses.css";

/* Images import */
import course1 from "../../assets/courses/course1.png";
import course2 from "../../assets/courses/course2.png";
import course3 from "../../assets/courses/course3.png";
import course4 from "../../assets/courses/course4.png";
import course5 from "../../assets/courses/course5.png";
import course6 from "../../assets/courses/course6.png";
import course7 from "../../assets/courses/course7.png";
import course8 from "../../assets/courses/course8.png";
import star from "../../assets/courses/star-filled.png";

export default function Courses() {
  return (
    <main>
      <h1 className="main-title">CURSOS EM DESTAQUE</h1>
      <div className="courses-section">
        <div className="bg-color"></div>
        <div className="courses">
          <div className="box">
            <img className="course-img" src={course1} />
            <h1 className="title">Análise e Desenvolvimento de Sistemas</h1>
            <div className="lower-itens">
              <h4 className="price">R$ 299,00</h4>
              <div className="stars">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
            </div>
          </div>
          <div className="box">
            <img className="course-img" src={course2} />
            <h1 className="title">Análise e Desenvolvimento de Sistemas</h1>
            <div className="lower-itens">
              <h4 className="price">R$ 299,00</h4>
              <div className="stars">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
            </div>
          </div>
          <div className="box">
            <img className="course-img" src={course3} />
            <h1 className="title">Análise e Desenvolvimento de Sistemas</h1>
            <div className="lower-itens">
              <h4 className="price">R$ 299,00</h4>
              <div className="stars">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
            </div>
          </div>
          <div className="box">
            <img className="course-img" src={course4} />
            <h1 className="title">Análise e Desenvolvimento de Sistemas</h1>
            <div className="lower-itens">
              <h4 className="price">R$ 299,00</h4>
              <div className="stars">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
            </div>
          </div>
          <div className="box">
            <img className="course-img" src={course5} />
            <h1 className="title">Análise e Desenvolvimento de Sistemas</h1>
            <div className="lower-itens">
              <h4 className="price">R$ 299,00</h4>
              <div className="stars">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
            </div>
          </div>
          <div className="box">
            <img className="course-img" src={course6} />
            <h1 className="title">Análise e Desenvolvimento de Sistemas</h1>
            <div className="lower-itens">
              <h4 className="price">R$ 299,00</h4>
              <div className="stars">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
            </div>
          </div>
          <div className="box">
            <img className="course-img" src={course7} />
            <h1 className="title">Análise e Desenvolvimento de Sistemas</h1>
            <div className="lower-itens">
              <h4 className="price">R$ 299,00</h4>
              <div className="stars">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
            </div>
          </div>
          <div className="box">
            <img className="course-img" src={course8} />
            <h1 className="title">Análise e Desenvolvimento de Sistemas</h1>
            <div className="lower-itens">
              <h4 className="price">R$ 299,00</h4>
              <div className="stars">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
