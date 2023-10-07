import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Main from "./components/menu/Main";
import Cv from "./components/section/Cv";
import Person from "./interface/Person";

function App() {
  const [person, setPerson] = useState<Person>({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: [],
    experience: [],
  });
  console.log(person.name);

  return (
    <>
      <Header />
      <div className="content">
        <Main person={person} setPerson={setPerson} />
        <Cv />
      </div>
      <Footer />
    </>
  );
}

export default App;
