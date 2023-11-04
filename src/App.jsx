import Header from "./components/header/Header.jsx";
import HeaderBody from "./components/header/HeaderBody.jsx";
import Courses from "./components/main/Courses.jsx";
import Enroll from "./components/enroll/Enroll";

function App() {
  return (
    <>
      <Header></Header>
      <HeaderBody></HeaderBody>
      <Courses></Courses>
      <Enroll></Enroll>
    </>
  );
}

export default App;
