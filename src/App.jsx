import Header from "./components/header/Header.jsx";
import HeaderBody from "./components/header/HeaderBody.jsx";
import Courses from "./components/main/Courses.jsx";
import Enroll from "./components/enroll/Enroll.jsx";
import Instructors from "./components/instructors/Instructors.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <HeaderBody></HeaderBody>
      <Courses></Courses>
      <Enroll></Enroll>
      <Instructors></Instructors>
      <Footer></Footer>
    </>
  );
}

export default App;
